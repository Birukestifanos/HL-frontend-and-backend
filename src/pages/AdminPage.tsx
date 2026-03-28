import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  FileText,
  DollarSign,
  Upload,
  Bell,
  LogOut,
  Settings,
  TrendingUp,
  BarChart3,
  PieChart,
  Plus,
  Search,
  ChevronRight,
  Home,
  Shield,
  MessageSquare,
  Heart,
  X,
  Trash2,
  Edit,
  Eye,
  Save,
  Loader2,
  AlertCircle,
  Menu,
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { useToast } from "../components/Toast";
import apiClient from "../services/axios";
import type {
  Admin,
  Contact,
  News,
  Emergency,
  TransparencyDoc,
  BeneficiaryStats,
  Donation,
  DonationStats,
} from "../services/api/adminApi";

export function AdminPage() {
  const { logout, admin } = useAdminAuth();
  const { showToast } = useToast();

  // Modal states
  const [showBeneficiaryModal, setShowBeneficiaryModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [editingEmergency, setEditingEmergency] = useState<Emergency | null>(
    null,
  );
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showTransparencyModal, setShowTransparencyModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);

  // Data states
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [emergencies, setEmergencies] = useState<Emergency[]>([]);
  const [transparencyDocs, setTransparencyDocs] = useState<TransparencyDoc[]>(
    [],
  );
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [beneficiaryStats, setBeneficiaryStats] =
    useState<BeneficiaryStats | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [donationStats, setDonationStats] = useState<DonationStats | null>(
    null,
  );

  // Loading states
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  // Form states
  const [beneficiaryForm, setBeneficiaryForm] = useState({
    total_beneficiaries: 0,
    countries_count: 0,
  });
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    image_url: "",
  });
  const [emergencyForm, setEmergencyForm] = useState({
    title: "",
    description: "",
    target_amount: 0,
    deadline: "",
  });
  const [adminForm, setAdminForm] = useState({
    email: "",
    password: "",
    role: "ADMIN",
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [transparencyForm, setTransparencyForm] = useState({
    title: "",
    file_type: "annual_report" as const,
    file: null as File | null,
  });

  // Search/filter
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  type AdminTab =
    | "dashboard"
    | "donations"
    | "beneficiaries"
    | "news"
    | "audit"
    | "transparency"
    | "contacts"
    | "settings"
    | "admins";

  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");

  const tabs: {
    id: AdminTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "donations", label: "Donations", icon: Heart },
    { id: "beneficiaries", label: "Beneficiaries", icon: Users },
    { id: "news", label: "News & Emergencies", icon: FileText },
    { id: "audit", label: "Financial Audit", icon: DollarSign },
    { id: "transparency", label: "Transparency", icon: Upload },
    { id: "contacts", label: "Contacts", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "admins", label: "Admin Management", icon: Shield },
  ];

  // Fetch data based on active tab - optimized with useCallback
  const fetchContacts = useCallback(async () => {
    const res = await apiClient.get("/v1/admin/contacts");
    setContacts(res.data.data);
  }, []);

  const fetchNewsAndEmergencies = useCallback(async () => {
    const [newsRes, emergenciesRes] = await Promise.all([
      apiClient.get("/v1/admin/news"),
      apiClient.get("/v1/admin/emergencies"),
    ]);
    setNews(newsRes.data.data);
    setEmergencies(emergenciesRes.data.data);
  }, []);

  const fetchTransparency = useCallback(async () => {
    const res = await apiClient.get("/v1/admin/transparency");
    setTransparencyDocs(res.data.data);
  }, []);

  const fetchAdmins = useCallback(async () => {
    const res = await apiClient.get("/v1/admin");
    setAdmins(res.data.data);
  }, []);

  const fetchBeneficiaryStats = useCallback(async () => {
    const res = await apiClient.get("/v1/admin/beneficiary-stats");
    setBeneficiaryStats(res.data.data);
  }, []);

  const fetchDonations = useCallback(async () => {
    const [donationsRes, donationStatsRes] = await Promise.all([
      apiClient.get("/v1/admin/donations"),
      apiClient.get("/v1/admin/donations/stats"),
    ]);
    setDonations(donationsRes.data.data);
    setDonationStats(donationStatsRes.data.data);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        switch (activeTab) {
          case "contacts":
            await fetchContacts();
            break;
          case "news":
            await fetchNewsAndEmergencies();
            break;
          case "transparency":
            await fetchTransparency();
            break;
          case "admins":
            await fetchAdmins();
            break;
          case "beneficiaries":
            await fetchBeneficiaryStats();
            break;
          case "donations":
            await fetchDonations();
            break;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
  }, [
    activeTab,
    fetchContacts,
    fetchNewsAndEmergencies,
    fetchTransparency,
    fetchAdmins,
    fetchBeneficiaryStats,
    fetchDonations,
  ]);

  // Memoized filter functions for better performance
  const filteredContacts = useMemo(
    () =>
      contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.subject.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [contacts, searchQuery],
  );

  const filteredNews = useMemo(
    () =>
      news.filter((n) =>
        n.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [news, searchQuery],
  );

  const filteredEmergencies = useMemo(
    () =>
      emergencies.filter((e) =>
        e.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [emergencies, searchQuery],
  );

  // CRUD Handlers
  const handleBeneficiarySave = async () => {
    setLoading(true);
    try {
      await apiClient.put("/v1/admin/beneficiary-stats", beneficiaryForm);
      const res = await apiClient.get("/v1/admin/beneficiary-stats");
      setBeneficiaryStats(res.data.data);
      setShowBeneficiaryModal(false);
      showToast("success", "Beneficiary stats updated successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to update beneficiary stats",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNewsSave = async () => {
    setLoading(true);
    try {
      if (editingNews) {
        await apiClient.put(`/v1/admin/news/${editingNews.id}`, newsForm);
        showToast("success", "News updated successfully!");
      } else {
        await apiClient.post("/v1/admin/news", newsForm);
        showToast("success", "News created successfully!");
      }
      const res = await apiClient.get("/v1/admin/news");
      setNews(res.data.data);
      setShowNewsModal(false);
      setEditingNews(null);
      setNewsForm({ title: "", content: "", image_url: "" });
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to save news",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNewsDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news?")) return;
    setLoading(true);
    try {
      await apiClient.delete(`/v1/admin/news/${id}`);
      const res = await apiClient.get("/v1/admin/news");
      setNews(res.data.data);
      showToast("success", "News deleted successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to delete news",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEmergencySave = async () => {
    setLoading(true);
    try {
      if (editingEmergency) {
        await apiClient.put(
          `/v1/admin/emergencies/${editingEmergency.id}`,
          emergencyForm,
        );
        showToast("success", "Emergency updated successfully!");
      } else {
        await apiClient.post("/v1/admin/emergencies", emergencyForm);
        showToast("success", "Emergency created successfully!");
      }
      const res = await apiClient.get("/v1/admin/emergencies");
      setEmergencies(res.data.data);
      setShowEmergencyModal(false);
      setEditingEmergency(null);
      setEmergencyForm({
        title: "",
        description: "",
        target_amount: 0,
        deadline: "",
      });
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to save emergency",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEmergencyDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this emergency?")) return;
    setLoading(true);
    try {
      await apiClient.delete(`/v1/admin/emergencies/${id}`);
      const res = await apiClient.get("/v1/admin/emergencies");
      setEmergencies(res.data.data);
      showToast("success", "Emergency deleted successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to delete emergency",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleContactView = async (contact: Contact) => {
    setSelectedContact(contact);
    setShowContactModal(true);
  };

  const handleContactDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    setLoading(true);
    try {
      await apiClient.delete(`/v1/admin/contacts/${id}`);
      const res = await apiClient.get("/v1/admin/contacts");
      setContacts(res.data.data);
      showToast("success", "Contact deleted successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to delete contact",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTransparencyUpload = async () => {
    if (!transparencyForm.file || !transparencyForm.title) {
      showToast("error", "Please fill in all required fields");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", transparencyForm.file);
      formData.append("title", transparencyForm.title);
      formData.append("file_type", transparencyForm.file_type);
      await apiClient.post("/v1/admin/transparency", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const res = await apiClient.get("/v1/admin/transparency");
      setTransparencyDocs(res.data.data);
      setShowTransparencyModal(false);
      setTransparencyForm({
        title: "",
        file_type: "annual_report",
        file: null,
      });
      showToast("success", "Document uploaded successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to upload document",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTransparencyDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this document?")) return;
    setLoading(true);
    try {
      await apiClient.delete(`/v1/admin/transparency/${id}`);
      const res = await apiClient.get("/v1/admin/transparency");
      setTransparencyDocs(res.data.data);
      showToast("success", "Document deleted successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to delete document",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAdminSave = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showToast("error", "Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await apiClient.put("/v1/admin/password/me", {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      showToast("success", "Password updated successfully!");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to update password",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSuperAdminSave = async () => {
    if (!adminForm.email || !adminForm.password) {
      showToast("error", "Please fill in all required fields");
      return;
    }
    setLoading(true);
    try {
      if (editingAdmin) {
        await apiClient.put(`/v1/admin/${editingAdmin.id}`, {
          email: adminForm.email,
          role: adminForm.role,
        });
        showToast("success", "Admin updated successfully!");
      } else {
        await apiClient.post("/v1/admin", adminForm);
        showToast("success", "Admin created successfully!");
      }
      const res = await apiClient.get("/v1/admin");
      setAdmins(res.data.data);
      setShowAdminModal(false);
      setEditingAdmin(null);
      setAdminForm({ email: "", password: "", role: "ADMIN" });
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to save admin",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAdminDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this admin?")) return;
    setLoading(true);
    try {
      await apiClient.delete(`/v1/admin/${id}`);
      const res = await apiClient.get("/v1/admin");
      setAdmins(res.data.data);
      showToast("success", "Admin deleted successfully!");
    } catch (error: any) {
      showToast(
        "error",
        error.response?.data?.message || "Failed to delete admin",
      );
    } finally {
      setLoading(false);
    }
  };

  // Open modals with data
  const openBeneficiaryModal = () => {
    if (beneficiaryStats) {
      setBeneficiaryForm({
        total_beneficiaries: beneficiaryStats.total_beneficiaries,
        countries_count: beneficiaryStats.countries_count,
      });
    }
    setShowBeneficiaryModal(true);
  };

  const openNewsModal = (item?: News) => {
    if (item) {
      setEditingNews(item);
      setNewsForm({
        title: item.title,
        content: item.content,
        image_url: item.image_url || "",
      });
    } else {
      setEditingNews(null);
      setNewsForm({ title: "", content: "", image_url: "" });
    }
    setShowNewsModal(true);
  };

  const openEmergencyModal = (item?: Emergency) => {
    if (item) {
      setEditingEmergency(item);
      setEmergencyForm({
        title: item.title,
        description: item.description,
        target_amount: item.target_amount || 0,
        deadline: item.deadline || "",
      });
    } else {
      setEditingEmergency(null);
      setEmergencyForm({
        title: "",
        description: "",
        target_amount: 0,
        deadline: "",
      });
    }
    setShowEmergencyModal(true);
  };

  const openAdminModal = (item?: Admin) => {
    if (item) {
      setEditingAdmin(item);
      setAdminForm({ email: item.email, password: "", role: item.role });
    } else {
      setEditingAdmin(null);
      setAdminForm({ email: "", password: "", role: "ADMIN" });
    }
    setShowAdminModal(true);
  };

  // Stats
  const stats = [
    {
      label: "Total Beneficiaries",
      value: beneficiaryStats?.total_beneficiaries?.toLocaleString() || "0",
      change: "+12%",
      icon: Users,
      color: "bg-[#B91C1C]",
    },
    {
      label: "News Articles",
      value: news.length.toString(),
      change: "+5%",
      icon: FileText,
      color: "bg-[#15803d]",
    },
    {
      label: "Active Emergencies",
      value: emergencies.filter((e) => e.is_active).length.toString(),
      change: "-2",
      icon: Bell,
      color: "bg-[#f59e0b]",
    },
    {
      label: "Total Donations",
      value: `$${donationStats?.totalAmount?.toLocaleString() || "0"}`,
      change: "+23%",
      icon: DollarSign,
      color: "bg-[#7c3aed]",
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      action: "New beneficiary registered",
      time: "2 minutes ago",
      type: "success",
    },
    {
      id: 2,
      action: "News article published",
      time: "1 hour ago",
      type: "info",
    },
    {
      id: 3,
      action: "Emergency update added",
      time: "3 hours ago",
      type: "warning",
    },
    {
      id: 4,
      action: "New volunteer application",
      time: "5 hours ago",
      type: "success",
    },
    {
      id: 5,
      action: "Transparency report uploaded",
      time: "1 day ago",
      type: "info",
    },
  ];

  // Modal Component
  const Modal = ({
    isOpen,
    onClose,
    title,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white dark:bg-[#1a1a1a] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Form Input Component
  const FormInput = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    required,
    textarea,
  }: any) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label} {required && <span className="text-[#B91C1C]">*</span>}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-gray-900 dark:text-white"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-gray-900 dark:text-white"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="h-full px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="font-serif text-lg md:text-xl font-bold text-[#B91C1C] hidden sm:inline">
                Hibret Lebego
              </span>
            </div>
            <span className="px-2 md:px-3 py-1 bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-semibold rounded-full">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-sm"
              />
            </div>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#B91C1C] rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="w-8 md:w-9 h-8 md:h-9 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#15803d] flex items-center justify-center text-white font-bold text-sm">
                {admin?.email?.charAt(0).toUpperCase() || "A"}
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {admin?.email || "Admin User"}
                </p>
                <p className="text-xs text-gray-500">
                  {admin?.role || "Administrator"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <>
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-gray-800 p-4 overflow-y-auto z-40 transform transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white shadow-lg shadow-[#B91C1C]/25"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="truncate">{tab.label}</span>
                  {activeTab === tab.id && (
                    <ChevronRight className="w-4 h-4 ml-auto flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-[#B91C1C] transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="truncate">Logout</span>
            </button>
          </div>
        </aside>
      </>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="max-w-7xl"
          >
            {/* Dashboard View */}
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-[#B91C1C] to-[#991B1B] rounded-3xl p-8 text-white">
                  <h1 className="font-serif text-3xl font-bold mb-2">
                    Welcome back, Admin! 👋
                  </h1>
                  <p className="text-white/80">
                    Here's what's happening with your organization today.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-green-500 text-sm font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {stat.change}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {stat.value}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                        Recent Activity
                      </h2>
                      <button className="text-[#B91C1C] text-sm font-medium hover:underline">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              activity.type === "success"
                                ? "bg-green-500"
                                : activity.type === "warning"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white">
                              {activity.action}
                            </p>
                            <p className="text-sm text-gray-500">
                              {activity.time}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Quick Actions
                    </h2>
                    <div className="space-y-3">
                      <button
                        onClick={() => setActiveTab("beneficiaries")}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#B91C1C]/10 hover:bg-[#B91C1C] text-[#B91C1C] hover:text-white transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add New Beneficiary
                      </button>
                      <button
                        onClick={() => setActiveTab("news")}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#15803d]/10 hover:bg-[#15803d] text-[#15803d] hover:text-white transition-colors"
                      >
                        <FileText className="w-5 h-5" />
                        Create News Post
                      </button>
                      <button
                        onClick={() => setActiveTab("transparency")}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#7c3aed]/10 hover:bg-[#7c3aed] text-[#7c3aed] hover:text-white transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        Upload Report
                      </button>
                      <button
                        onClick={() => setActiveTab("contacts")}
                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5" />
                        View Messages
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Donations Tab */}
            {activeTab === "donations" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-[#15803d] dark:text-white">
                      Donations Management
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Track and manage all donation records
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <DollarSign className="w-8 h-8 text-[#15803d]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        +12%
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${donationStats?.totalAmount?.toLocaleString() || "0"}
                    </h3>
                    <p className="text-gray-500 text-sm">Total Donations</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="w-8 h-8 text-[#7c3aed]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {donationStats?.totalDonors || 0} Donors
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {donationStats?.totalDonors || 0}
                    </h3>
                    <p className="text-gray-500 text-sm">Total Donors</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <BarChart3 className="w-8 h-8 text-[#B91C1C]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${donationStats?.averageDonation?.toFixed(2) || "0.00"}
                    </h3>
                    <p className="text-gray-500 text-sm">Average Donation</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                      Recent Donations
                    </h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-800/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Donor
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Amount
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Date
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Status
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                            Transaction Ref
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {loadingData ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-8 text-center">
                              <Loader2 className="w-6 h-6 animate-spin mx-auto text-[#B91C1C]" />
                            </td>
                          </tr>
                        ) : donations.length === 0 ? (
                          <tr>
                            <td
                              colSpan={5}
                              className="px-6 py-8 text-center text-gray-500"
                            >
                              No donations found
                            </td>
                          </tr>
                        ) : (
                          donations.slice(0, 10).map((donation) => (
                            <tr
                              key={donation.id}
                              className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white font-medium">
                                    {donation.donor_name?.charAt(0) || "D"}
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                      {donation.donor_name || "Anonymous"}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      {donation.donor_email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                  ${donation.amount.toFixed(2)}
                                </p>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                  {new Date(
                                    donation.created_at,
                                  ).toLocaleDateString()}
                                </p>
                              </td>
                              <td className="px-6 py-4">
                                <span
                                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                                    donation.status === "completed"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-yellow-100 text-yellow-700"
                                  }`}
                                >
                                  {donation.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                                  {donation.tx_ref}
                                </p>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Beneficiaries Tab */}
            {activeTab === "beneficiaries" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                      Beneficiaries Management
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Manage and track all beneficiaries
                    </p>
                  </div>
                  <button
                    onClick={openBeneficiaryModal}
                    className="flex items-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors shadow-lg shadow-[#B91C1C]/25"
                  >
                    <Edit className="w-5 h-5" />
                    Update Stats
                  </button>
                </div>

                {loadingData ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#B91C1C]" />
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#B91C1C]/10 to-[#B91C1C]/5 border border-[#B91C1C]/20">
                        <h3 className="text-4xl font-bold text-[#B91C1C]">
                          {beneficiaryStats?.total_beneficiaries?.toLocaleString() ||
                            "0"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Total Beneficiaries
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#15803d]/10 to-[#15803d]/5 border border-[#15803d]/20">
                        <h3 className="text-4xl font-bold text-[#15803d]">
                          {beneficiaryStats?.countries_count || 0}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Countries
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#7c3aed]/10 to-[#7c3aed]/5 border border-[#7c3aed]/20">
                        <h3 className="text-4xl font-bold text-[#7c3aed]">
                          Active
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Program Status
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* News Tab */}
            {activeTab === "news" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                      News & Emergencies
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Manage news articles and emergency updates
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openNewsModal()}
                      className="flex items-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      Add News
                    </button>
                    <button
                      onClick={() => openEmergencyModal()}
                      className="flex items-center gap-2 px-6 py-3 bg-[#f59e0b] text-white rounded-xl font-medium hover:bg-[#d97706] transition-colors"
                    >
                      <Bell className="w-5 h-5" />
                      Add Emergency
                    </button>
                  </div>
                </div>

                {/* News Section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5" /> News Articles
                  </h2>
                  {loadingData ? (
                    <div className="flex justify-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-[#B91C1C]" />
                    </div>
                  ) : filteredNews.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      No news articles found
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredNews.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <div className="h-40 bg-gradient-to-br from-[#B91C1C]/20 to-[#15803d]/20"></div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-1 bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-medium rounded-full">
                                News
                              </span>
                              <span className="text-gray-400 text-xs">
                                {new Date(item.created_at).toLocaleDateString()}
                              </span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                              {item.content}
                            </p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => openNewsModal(item)}
                                className="text-[#B91C1C] font-medium text-sm hover:underline flex items-center gap-1"
                              >
                                <Edit className="w-4 h-4" /> Edit
                              </button>
                              <button
                                onClick={() => handleNewsDelete(item.id)}
                                className="text-red-500 font-medium text-sm hover:underline flex items-center gap-1"
                              >
                                <Trash2 className="w-4 h-4" /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Emergencies Section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#f59e0b]" />{" "}
                    Emergencies
                  </h2>
                  {loadingData ? (
                    <div className="flex justify-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-[#f59e0b]" />
                    </div>
                  ) : filteredEmergencies.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      No emergencies found
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredEmergencies.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <div
                            className={`h-2 ${
                              item.is_active ? "bg-[#f59e0b]" : "bg-gray-400"
                            }`}
                          ></div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  item.is_active
                                    ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {item.is_active ? "Active" : "Inactive"}
                              </span>
                              <span className="text-gray-400 text-xs">
                                {new Date(item.created_at).toLocaleDateString()}
                              </span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                              {item.description}
                            </p>
                            {item.target_amount && (
                              <p className="text-sm text-[#15803d] font-medium mb-2">
                                Target: ${item.target_amount.toLocaleString()}
                              </p>
                            )}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => openEmergencyModal(item)}
                                className="text-[#f59e0b] font-medium text-sm hover:underline flex items-center gap-1"
                              >
                                <Edit className="w-4 h-4" /> Edit
                              </button>
                              <button
                                onClick={() => handleEmergencyDelete(item.id)}
                                className="text-red-500 font-medium text-sm hover:underline flex items-center gap-1"
                              >
                                <Trash2 className="w-4 h-4" /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Audit Tab */}
            {activeTab === "audit" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                      Financial Audit
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Track and manage financial transactions
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <DollarSign className="w-8 h-8 text-[#15803d] mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${donationStats?.totalAmount?.toLocaleString() || "0"}
                    </h3>
                    <p className="text-gray-500 text-sm">Total Received</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <TrendingUp className="w-8 h-8 text-[#B91C1C] mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      $180,000
                    </h3>
                    <p className="text-gray-500 text-sm">Total Spent</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <BarChart3 className="w-8 h-8 text-[#7c3aed] mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      $65,000
                    </h3>
                    <p className="text-gray-500 text-sm">Current Balance</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <PieChart className="w-8 h-8 text-[#f59e0b] mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      73%
                    </h3>
                    <p className="text-gray-500 text-sm">Efficiency Rate</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                      Transaction History
                    </h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-800/50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Date
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Description
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Category
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Amount
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {donations.slice(0, 10).map((donation) => (
                          <tr
                            key={donation.id}
                            className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          >
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {new Date(
                                donation.created_at,
                              ).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                              Donation
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              Income
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-[#15803d]">
                              +${donation.amount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                {donation.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Transparency Tab */}
            {activeTab === "transparency" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                      Transparency Files
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Upload and manage transparency documents
                    </p>
                  </div>
                  <button
                    onClick={() => setShowTransparencyModal(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                    Upload Document
                  </button>
                </div>

                {loadingData ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#B91C1C]" />
                  </div>
                ) : transparencyDocs.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    No documents uploaded yet
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                      <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                        Uploaded Documents
                      </h2>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {transparencyDocs.map((doc) => (
                        <div
                          key={doc.id}
                          className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#B91C1C]/10 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-[#B91C1C]" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {doc.title}
                              </p>
                              <p className="text-sm text-gray-500">
                                {new Date(doc.created_at).toLocaleDateString()}{" "}
                                • {doc.file_type.replace("_", " ")}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <a
                              href={doc.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                            >
                              <Eye className="w-5 h-5" />
                            </a>
                            <button
                              onClick={() => handleTransparencyDelete(doc.id)}
                              className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === "contacts" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                      Contacts & Inquiries
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Manage contact form submissions and inquiries
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <MessageSquare className="w-8 h-8 text-[#B91C1C]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {contacts.filter((c) => c.type === "general").length}{" "}
                        New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {contacts.filter((c) => c.type === "general").length}
                    </h3>
                    <p className="text-gray-500 text-sm">General Inquiries</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="w-8 h-8 text-[#15803d]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {contacts.filter((c) => c.type === "volunteer").length}{" "}
                        New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {contacts.filter((c) => c.type === "volunteer").length}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Volunteer Applications
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <Bell className="w-8 h-8 text-[#7c3aed]" />
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                        {contacts.filter((c) => c.type === "internship").length}{" "}
                        New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {contacts.filter((c) => c.type === "internship").length}
                    </h3>
                    <p className="text-gray-500 text-sm">Internship Requests</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                      Recent Messages
                    </h2>
                  </div>
                  {loadingData ? (
                    <div className="flex justify-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-[#B91C1C]" />
                    </div>
                  ) : filteredContacts.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      No contacts found
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {filteredContacts.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
                          onClick={() => handleContactView(msg)}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#15803d] flex items-center justify-center text-white font-bold">
                              {msg.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                {msg.name}
                                <span className="w-2 h-2 bg-[#B91C1C] rounded-full"></span>
                              </p>
                              <p className="text-sm text-gray-500">
                                {msg.subject}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm text-gray-400">
                                {new Date(msg.created_at).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-gray-500">
                                {msg.type}
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <div>
                  <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                    Settings
                  </h1>
                  <p className="text-gray-500 mt-1">
                    Manage your account settings
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Profile Section */}
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Profile Information
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#15803d] flex items-center justify-center text-white text-2xl font-bold">
                          {admin?.email?.charAt(0).toUpperCase() || "A"}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {admin?.email || "Admin User"}
                          </p>
                          <p className="text-sm text-gray-500">
                            {admin?.role || "Administrator"}
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {admin?.email || "Not available"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {admin?.role || "Not available"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Change Password
                    </h2>
                    <div className="space-y-4">
                      <FormInput
                        label="Current Password"
                        type="password"
                        value={passwordForm.currentPassword}
                        onChange={(v: string) =>
                          setPasswordForm({
                            ...passwordForm,
                            currentPassword: v,
                          })
                        }
                        placeholder="Enter current password"
                        required
                      />
                      <FormInput
                        label="New Password"
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={(v: string) =>
                          setPasswordForm({ ...passwordForm, newPassword: v })
                        }
                        placeholder="Enter new password"
                        required
                      />
                      <FormInput
                        label="Confirm Password"
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={(v: string) =>
                          setPasswordForm({
                            ...passwordForm,
                            confirmPassword: v,
                          })
                        }
                        placeholder="Confirm new password"
                        required
                      />
                      <button
                        onClick={handleAdminSave}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors disabled:opacity-50"
                      >
                        {loading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Save className="w-5 h-5" />
                        )}
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Management Tab */}
            {activeTab === "admins" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                      Admin Management
                    </h1>
                    <p className="text-gray-500 mt-1">
                      Manage admin accounts (Super Admin only)
                    </p>
                  </div>
                  {admin?.role === "SUPER_ADMIN" && (
                    <button
                      onClick={() => openAdminModal()}
                      className="flex items-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      Add Admin
                    </button>
                  )}
                </div>

                {!admin || admin.role !== "SUPER_ADMIN" ? (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600" />
                      <p className="text-yellow-800 dark:text-yellow-200">
                        You do not have permission to manage admins. Only Super
                        Admins can access this section.
                      </p>
                    </div>
                  </div>
                ) : loadingData ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#B91C1C]" />
                  </div>
                ) : (
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-800/50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                              Email
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                              Role
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                              Created At
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                          {admins.length === 0 ? (
                            <tr>
                              <td
                                colSpan={4}
                                className="px-6 py-8 text-center text-gray-500"
                              >
                                No admins found
                              </td>
                            </tr>
                          ) : (
                            admins.map((adminItem) => (
                              <tr
                                key={adminItem.id}
                                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                              >
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white font-bold">
                                      {adminItem.email.charAt(0).toUpperCase()}
                                    </div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                      {adminItem.email}
                                    </p>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                      adminItem.role === "SUPER_ADMIN"
                                        ? "bg-[#7c3aed]/10 text-[#7c3aed]"
                                        : "bg-[#15803d]/10 text-[#15803d]"
                                    }`}
                                  >
                                    {adminItem.role}
                                  </span>
                                </td>
                                <td className="px-6 py-4">
                                  <p className="text-gray-500 dark:text-gray-400">
                                    {new Date(
                                      adminItem.created_at,
                                    ).toLocaleDateString()}
                                  </p>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => openAdminModal(adminItem)}
                                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                                    >
                                      <Edit className="w-5 h-5" />
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleAdminDelete(adminItem.id)
                                      }
                                      className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"
                                    >
                                      <Trash2 className="w-5 h-5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Beneficiary Modal */}
      <Modal
        isOpen={showBeneficiaryModal}
        onClose={() => setShowBeneficiaryModal(false)}
        title="Update Beneficiary Stats"
      >
        <div className="space-y-4">
          <FormInput
            label="Total Beneficiaries"
            type="number"
            value={beneficiaryForm.total_beneficiaries}
            onChange={(v: number) =>
              setBeneficiaryForm({
                ...beneficiaryForm,
                total_beneficiaries: Number(v),
              })
            }
            placeholder="Enter total beneficiaries"
            required
          />
          <FormInput
            label="Countries Count"
            type="number"
            value={beneficiaryForm.countries_count}
            onChange={(v: number) =>
              setBeneficiaryForm({
                ...beneficiaryForm,
                countries_count: Number(v),
              })
            }
            placeholder="Enter countries count"
            required
          />
          <button
            onClick={handleBeneficiarySave}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            Save Changes
          </button>
        </div>
      </Modal>

      {/* News Modal */}
      <Modal
        isOpen={showNewsModal}
        onClose={() => {
          setShowNewsModal(false);
          setEditingNews(null);
          setNewsForm({ title: "", content: "", image_url: "" });
        }}
        title={editingNews ? "Edit News" : "Add News"}
      >
        <div className="space-y-4">
          <FormInput
            label="Title"
            value={newsForm.title}
            onChange={(v: string) => setNewsForm({ ...newsForm, title: v })}
            placeholder="Enter news title"
            required
          />
          <FormInput
            label="Content"
            value={newsForm.content}
            onChange={(v: string) => setNewsForm({ ...newsForm, content: v })}
            placeholder="Enter news content"
            textarea
            required
          />
          <FormInput
            label="Image URL (optional)"
            value={newsForm.image_url}
            onChange={(v: string) => setNewsForm({ ...newsForm, image_url: v })}
            placeholder="Enter image URL"
          />
          <button
            onClick={handleNewsSave}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {editingNews ? "Update News" : "Create News"}
          </button>
        </div>
      </Modal>

      {/* Emergency Modal */}
      <Modal
        isOpen={showEmergencyModal}
        onClose={() => {
          setShowEmergencyModal(false);
          setEditingEmergency(null);
          setEmergencyForm({
            title: "",
            description: "",
            target_amount: 0,
            deadline: "",
          });
        }}
        title={editingEmergency ? "Edit Emergency" : "Add Emergency"}
      >
        <div className="space-y-4">
          <FormInput
            label="Title"
            value={emergencyForm.title}
            onChange={(v: string) =>
              setEmergencyForm({ ...emergencyForm, title: v })
            }
            placeholder="Enter emergency title"
            required
          />
          <FormInput
            label="Description"
            value={emergencyForm.description}
            onChange={(v: string) =>
              setEmergencyForm({ ...emergencyForm, description: v })
            }
            placeholder="Enter emergency description"
            textarea
            required
          />
          <FormInput
            label="Target Amount"
            type="number"
            value={emergencyForm.target_amount}
            onChange={(v: number) =>
              setEmergencyForm({ ...emergencyForm, target_amount: Number(v) })
            }
            placeholder="Enter target amount"
          />
          <FormInput
            label="Deadline"
            type="date"
            value={emergencyForm.deadline}
            onChange={(v: string) =>
              setEmergencyForm({ ...emergencyForm, deadline: v })
            }
            placeholder="Select deadline"
          />
          {editingEmergency && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={editingEmergency.is_active}
                onChange={(e) =>
                  setEditingEmergency({
                    ...editingEmergency,
                    is_active: e.target.checked,
                  })
                }
                className="w-4 h-4"
              />
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Active
              </label>
            </div>
          )}
          <button
            onClick={handleEmergencySave}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f59e0b] text-white rounded-xl font-medium hover:bg-[#d97706] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {editingEmergency ? "Update Emergency" : "Create Emergency"}
          </button>
        </div>
      </Modal>

      {/* Contact Detail Modal */}
      <Modal
        isOpen={showContactModal}
        onClose={() => {
          setShowContactModal(false);
          setSelectedContact(null);
        }}
        title="Contact Details"
      >
        {selectedContact && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#15803d] flex items-center justify-center text-white text-xl font-bold">
                {selectedContact.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                  {selectedContact.name}
                </h3>
                <span className="px-2 py-1 bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-medium rounded-full">
                  {selectedContact.type}
                </span>
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {selectedContact.email}
                </p>
              </div>
              {selectedContact.phone && (
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedContact.phone}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Subject</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {selectedContact.subject}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Message</p>
                <p className="font-medium text-gray-900 dark:text-white whitespace-pre-wrap">
                  {selectedContact.message}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Received</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(selectedContact.created_at).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <button
                onClick={() => {
                  handleContactDelete(selectedContact.id);
                  setShowContactModal(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Delete
              </button>
              <button
                onClick={() => {
                  setShowContactModal(false);
                  setSelectedContact(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Transparency Upload Modal */}
      <Modal
        isOpen={showTransparencyModal}
        onClose={() => {
          setShowTransparencyModal(false);
          setTransparencyForm({
            title: "",
            file_type: "annual_report",
            file: null,
          });
        }}
        title="Upload Transparency Document"
      >
        <div className="space-y-4">
          <FormInput
            label="Document Title"
            value={transparencyForm.title}
            onChange={(v: string) =>
              setTransparencyForm({ ...transparencyForm, title: v })
            }
            placeholder="Enter document title"
            required
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Document Type <span className="text-[#B91C1C]">*</span>
            </label>
            <select
              value={transparencyForm.file_type}
              onChange={(e) =>
                setTransparencyForm({
                  ...transparencyForm,
                  file_type: e.target.value as any,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-gray-900 dark:text-white"
            >
              <option value="annual_report">Annual Report</option>
              <option value="audit_report">Audit Report</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              PDF File <span className="text-[#B91C1C]">*</span>
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setTransparencyForm({
                  ...transparencyForm,
                  file: e.target.files?.[0] || null,
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#B91C1C] file:text-white hover:file:bg-[#991B1B]"
            />
          </div>
          <button
            onClick={handleTransparencyUpload}
            disabled={
              loading || !transparencyForm.file || !transparencyForm.title
            }
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Upload className="w-5 h-5" />
            )}
            Upload Document
          </button>
        </div>
      </Modal>

      {/* Admin Modal */}
      <Modal
        isOpen={showAdminModal}
        onClose={() => {
          setShowAdminModal(false);
          setEditingAdmin(null);
          setAdminForm({ email: "", password: "", role: "ADMIN" });
        }}
        title={editingAdmin ? "Edit Admin" : "Add Admin"}
      >
        <div className="space-y-4">
          <FormInput
            label="Email"
            type="email"
            value={adminForm.email}
            onChange={(v: string) => setAdminForm({ ...adminForm, email: v })}
            placeholder="Enter admin email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            value={adminForm.password}
            onChange={(v: string) =>
              setAdminForm({ ...adminForm, password: v })
            }
            placeholder={
              editingAdmin ? "Leave blank to keep current" : "Enter password"
            }
            required={!editingAdmin}
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Role <span className="text-[#B91C1C]">*</span>
            </label>
            <select
              value={adminForm.role}
              onChange={(e) =>
                setAdminForm({ ...adminForm, role: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-gray-900 dark:text-white"
            >
              <option value="ADMIN">Admin</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </div>
          <button
            onClick={handleSuperAdminSave}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {editingAdmin ? "Update Admin" : "Create Admin"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
