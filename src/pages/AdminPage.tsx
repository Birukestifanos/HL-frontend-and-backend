import { useState } from "react";
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
  Filter,
  MoreVertical,
  ChevronRight,
  Home,
  Shield,
  MessageSquare,
  Heart,
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";

export function AdminPage() {
  const { logout, admin } = useAdminAuth();
  type AdminTab =
    | "dashboard"
    | "donations"
    | "beneficiaries"
    | "news"
    | "audit"
    | "transparency"
    | "contacts";

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
  ] as const;

  // Dashboard stats
  const stats = [
    {
      label: "Total Beneficiaries",
      value: "12,450",
      change: "+12%",
      icon: Users,
      color: "bg-[#B91C1C]",
    },
    {
      label: "News Articles",
      value: "48",
      change: "+5%",
      icon: FileText,
      color: "bg-[#15803d]",
    },
    {
      label: "Active Emergencies",
      value: "3",
      change: "-2",
      icon: Bell,
      color: "bg-[#f59e0b]",
    },
    {
      label: "Total Donations",
      value: "$245K",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-[#B91C1C]">
                Hibret Lebego
              </span>
            </div>
            <span className="px-3 py-1 bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-semibold rounded-full">
              Admin Panel
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20 text-sm"
              />
            </div>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#B91C1C] rounded-full"></span>
            </button>
            <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
              <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#15803d] flex items-center justify-center text-white font-bold">
                {admin?.email?.charAt(0).toUpperCase() || "A"}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {admin?.email || "Admin User"}
                </p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-[#1a1a1a] border-r border-gray-200 dark:border-gray-800 p-4 overflow-y-auto">
        <nav className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white shadow-lg shadow-[#B91C1C]/25"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                {activeTab === tab.id && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
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
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-16 p-8">
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
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-[#B91C1C] to-[#991B1B] rounded-3xl p-8 text-white">
                  <h1 className="font-serif text-3xl font-bold mb-2">
                    Welcome back, Admin! 👋
                  </h1>
                  <p className="text-white/80">
                    Here's what's happening with your organization today.
                  </p>
                </div>

                {/* Stats Grid */}
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

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Activity */}
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

                  {/* Quick Actions */}
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Quick Actions
                    </h2>
                    <div className="space-y-3">
                      <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#B91C1C]/10 hover:bg-[#B91C1C] text-[#B91C1C] hover:text-white transition-colors">
                        <Plus className="w-5 h-5" />
                        Add New Beneficiary
                      </button>
                      <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#15803d]/10 hover:bg-[#15803d] text-[#15803d] hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                        Create News Post
                      </button>
                      <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#7c3aed]/10 hover:bg-[#7c3aed] text-[#7c3aed] hover:text-white transition-colors">
                        <Upload className="w-5 h-5" />
                        Upload Report
                      </button>
                      <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
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
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#15803d] text-white rounded-xl font-medium hover:bg-[#166534] transition-colors shadow-lg shadow-[#15803d]/25">
                    <TrendingUp className="w-5 h-5" />
                    View Analytics
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <DollarSign className="w-8 h-8 text-[#15803d]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        +12%
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      $124,500
                    </h3>
                    <p className="text-gray-500 text-sm">Total Donations</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="w-8 h-8 text-[#7c3aed]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        8 New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      892
                    </h3>
                    <p className="text-gray-500 text-sm">Total Donors</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <BarChart3 className="w-8 h-8 text-[#B91C1C]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      $139.60
                    </h3>
                    <p className="text-gray-500 text-sm">Average Donation</p>
                  </div>
                </div>

                {/* Recent Donations Table */}
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
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#991B1B] flex items-center justify-center text-white font-medium">
                                JD
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  John Doe
                                </p>
                                <p className="text-sm text-gray-500">
                                  john.doe@email.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-900 dark:text-white">
                              $500.00
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-gray-500 dark:text-gray-400">
                              March 15, 2026
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Completed
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#15803d] to-[#166534] flex items-center justify-center text-white font-medium">
                                SM
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  Sarah Miller
                                </p>
                                <p className="text-sm text-gray-500">
                                  sarah.m@email.com
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-semibold text-gray-900 dark:text-white">
                              $250.00
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-gray-500 dark:text-gray-400">
                              March 14, 2026
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Completed
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                              <MoreVertical className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
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
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors shadow-lg shadow-[#B91C1C]/25">
                    <Plus className="w-5 h-5" />
                    Add Beneficiary
                  </button>
                </div>

                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search beneficiaries..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-[#B91C1C]/20"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <Filter className="w-5 h-5" />
                      Filter
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#B91C1C]/10 to-[#B91C1C]/5 border border-[#B91C1C]/20">
                      <h3 className="text-4xl font-bold text-[#B91C1C]">
                        12,450
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Total Beneficiaries
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#15803d]/10 to-[#15803d]/5 border border-[#15803d]/20">
                      <h3 className="text-4xl font-bold text-[#15803d]">
                        8,230
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Active Members
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#7c3aed]/10 to-[#7c3aed]/5 border border-[#7c3aed]/20">
                      <h3 className="text-4xl font-bold text-[#7c3aed]">
                        4,220
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        New This Month
                      </p>
                    </div>
                  </div>
                </div>
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
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-colors">
                      <Plus className="w-5 h-5" />
                      Add News
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#f59e0b] text-white rounded-xl font-medium hover:bg-[#d97706] transition-colors">
                      <Bell className="w-5 h-5" />
                      Add Emergency
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="h-40 bg-gradient-to-br from-[#B91C1C]/20 to-[#15803d]/20"></div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-[#B91C1C]/10 text-[#B91C1C] text-xs font-medium rounded-full">
                            News
                          </span>
                          <span className="text-gray-400 text-xs">
                            2 hours ago
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          Community Impact Report 2024
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">
                          Latest updates on our community programs and impact...
                        </p>
                        <button className="text-[#B91C1C] font-medium text-sm hover:underline">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
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
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#15803d] text-white rounded-xl font-medium hover:bg-[#166534] transition-colors">
                    <Upload className="w-5 h-5" />
                    Import Data
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <DollarSign className="w-8 h-8 text-[#15803d] mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      $245,000
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
                        {[
                          {
                            date: "Mar 25, 2024",
                            desc: "Donation - Corporate Partner",
                            cat: "Income",
                            amount: "$50,000",
                            status: "Completed",
                          },
                          {
                            date: "Mar 24, 2024",
                            desc: "Program Supplies",
                            cat: "Expense",
                            amount: "$12,500",
                            status: "Completed",
                          },
                          {
                            date: "Mar 23, 2024",
                            desc: "Community Event Sponsorship",
                            cat: "Expense",
                            amount: "$8,000",
                            status: "Pending",
                          },
                          {
                            date: "Mar 22, 2024",
                            desc: "Individual Donation",
                            cat: "Income",
                            amount: "$5,000",
                            status: "Completed",
                          },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          >
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {row.date}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                              {row.desc}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {row.cat}
                            </td>
                            <td
                              className={`px-6 py-4 text-sm font-bold ${
                                row.cat === "Income"
                                  ? "text-[#15803d]"
                                  : "text-[#B91C1C]"
                              }`}
                            >
                              {row.amount}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  row.status === "Completed"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                }`}
                              >
                                {row.status}
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-[#B91C1C] transition-colors cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-[#B91C1C]/10 flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-[#B91C1C]" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
                      Upload Annual Report
                    </h3>
                    <p className="text-gray-500 text-center text-sm">
                      Drag & drop or click to upload PDF
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-[#15803d] transition-colors cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-[#15803d]/10 flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-[#15803d]" />
                    </div>
                    <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
                      Upload Audit Report
                    </h3>
                    <p className="text-gray-500 text-center text-sm">
                      Drag & drop or click to upload PDF
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h2 className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                      Uploaded Documents
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      {
                        name: "Annual Report 2023",
                        date: "Jan 15, 2024",
                        size: "2.4 MB",
                      },
                      {
                        name: "Financial Audit 2023",
                        date: "Jan 10, 2024",
                        size: "1.8 MB",
                      },
                      {
                        name: "Impact Report Q4",
                        date: "Dec 20, 2023",
                        size: "3.2 MB",
                      },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#B91C1C]/10 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#B91C1C]" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {doc.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {doc.date} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
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
                        12 New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      45
                    </h3>
                    <p className="text-gray-500 text-sm">General Inquiries</p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="w-8 h-8 text-[#15803d]" />
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        5 New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      28
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Volunteer Applications
                    </p>
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <Bell className="w-8 h-8 text-[#7c3aed]" />
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                        3 New
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      15
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
                  <div className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      {
                        name: "John Doe",
                        email: "john@example.com",
                        subject: "Volunteer Application",
                        date: "2 hours ago",
                        unread: true,
                      },
                      {
                        name: "Sarah Smith",
                        email: "sarah@example.com",
                        subject: "Donation Inquiry",
                        date: "5 hours ago",
                        unread: true,
                      },
                      {
                        name: "Mike Johnson",
                        email: "mike@example.com",
                        subject: "Partnership Proposal",
                        date: "1 day ago",
                        unread: false,
                      },
                    ].map((msg, i) => (
                      <div
                        key={i}
                        className={`p-4 flex items-center justify-between ${
                          msg.unread ? "bg-[#B91C1C]/5" : ""
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B91C1C] to-[#15803d] flex items-center justify-center text-white font-bold">
                            {msg.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                              {msg.name}
                              {msg.unread && (
                                <span className="w-2 h-2 bg-[#B91C1C] rounded-full"></span>
                              )}
                            </p>
                            <p className="text-sm text-gray-500">
                              {msg.subject}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">{msg.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
