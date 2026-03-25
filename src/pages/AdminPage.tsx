import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  DollarSign,
  Upload,
  Bell,
  LogOut,
} from "lucide-react";
import { useAdminAuth } from "../context/AdminAuthContext";

export function AdminPage() {
  const { logout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<
    "beneficiaries" | "news" | "audit" | "transparency" | "contacts"
  >("beneficiaries");

  const tabs = [
    { id: "beneficiaries", label: "Beneficiaries", icon: Users },
    { id: "news", label: "News & Emergencies", icon: FileText },
    { id: "audit", label: "Audit Log", icon: DollarSign },
    { id: "transparency", label: "Transparency Files", icon: Upload },
    { id: "contacts", label: "Contacts & Inquiries", icon: Bell },
  ] as const;

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#0f0f0f] pt-20 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="font-serif text-4xl font-bold text-[#B91C1C] mb-2">
              Admin Panel
            </h1>
            <p className="text-[#1a1a1a]/70 dark:text-white/70">
              Manage beneficiaries, news, emergencies, financial audit, and
              transparency files.
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B91C1C] text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white transition-colors font-medium self-start"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#B91C1C]/20 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#22c55e] text-white"
                  : "bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-white hover:bg-[#B91C1C]/10"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panels */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg border border-[#B91C1C]/10 dark:border-[#B91C1C]/20 p-8"
        >
          {activeTab === "beneficiaries" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
                Alter Number of Beneficiaries
              </h2>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                Update the total beneficiary count displayed on the website.
              </p>
              <div className="flex gap-4 items-end">
                <div className="flex-1 max-w-xs">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Total Beneficiaries
                  </label>
                  <input
                    type="number"
                    defaultValue="10000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#2a2a2a]"
                  />
                </div>
                <button className="bg-[#86efac] text-[#111111] px-6 py-3 rounded-lg font-bold hover:bg-[#22c55e]">
                  Save
                </button>
              </div>
            </div>
          )}

          {activeTab === "news" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
                News, Stories & Emergency Updates
              </h2>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                Create, update, and delete news items and emergency updates.
              </p>
              <div className="space-y-4">
                <button className="bg-[#B91C1C] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#991B1B]">
                  + Add News
                </button>
                <button className="bg-[#B91C1C] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#991B1B] ml-2">
                  + Add Emergency Update
                </button>
                <div className="mt-6 p-4 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg text-sm text-gray-600 dark:text-gray-400">
                  List of news/emergencies will load from API. CRUD operations.
                </div>
              </div>
            </div>
          )}

          {activeTab === "audit" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
                Audit Log – Financial Fund Deposits
              </h2>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                View audit trail of all financial fund deposits.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3">Date</th>
                      <th className="text-left py-3">Amount</th>
                      <th className="text-left py-3">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 text-gray-500">–</td>
                      <td className="py-3 text-gray-500">–</td>
                      <td className="py-3 text-gray-500">
                        Connect backend for real data
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "transparency" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
                Import / Load Transparency Files (PDF)
              </h2>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                Upload annual reports, audit reports, and other transparency
                documents to display on the website.
              </p>
              <div className="border-2 border-dashed border-[#B91C1C]/30 rounded-xl p-12 text-center">
                <Upload className="h-12 w-12 text-[#86efac] mx-auto mb-4" />
                <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-4">
                  Drag & drop PDF files or click to upload
                </p>
                <button className="bg-[#B91C1C] text-white px-6 py-2 rounded-lg font-medium">
                  Select File
                </button>
              </div>
            </div>
          )}

          {activeTab === "contacts" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#111111] dark:text-white mb-6">
                Contact Notifications & Lists
              </h2>
              <p className="text-[#1a1a1a]/70 dark:text-white/70 mb-6">
                Track contacting users, volunteer applications, and internship
                inquiries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#86efac]/10 rounded-lg">
                  <h3 className="font-semibold text-[#111111] dark:text-white mb-2">
                    General Inquiries
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    0 – Connect form backend
                  </p>
                </div>
                <div className="p-4 bg-[#86efac]/10 rounded-lg">
                  <h3 className="font-semibold text-[#111111] dark:text-white mb-2">
                    Volunteer Applications
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    0 – Connect form backend
                  </p>
                </div>
                <div className="p-4 bg-[#86efac]/10 rounded-lg">
                  <h3 className="font-semibold text-[#111111] dark:text-white mb-2">
                    Internship Inquiries
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    0 – Connect form backend
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
