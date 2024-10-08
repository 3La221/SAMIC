"use client"
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Home, Target, Briefcase, Newspaper,
   BookOpen, Building2, Calendar, Archive, LogOut , Star , Plus} from 'lucide-react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-6 flex-grow">
          <NavLink href="/dashboard" icon={<Home className="w-5 h-5" />}>
            Vue d&apos;ensemble
          </NavLink>
          <NavLink href="/dashboard/objectifs" icon={<Target className="w-5 h-5" />}>
            Objectifs
          </NavLink>
          <NavLink href="/dashboard/missions" icon={<Briefcase className="w-5 h-5" />}>
            Missions
          </NavLink>
          <NavLink href="/dashboard/actualites" icon={<Newspaper className="w-5 h-5" />}>
            Actualités
          </NavLink>
          <NavLink href="/dashboard/formations" icon={<BookOpen className="w-5 h-5" />}>
            Formation
          </NavLink>
          <NavLink href="/dashboard/organisations" icon={<Building2 className="w-5 h-5" />}>
            Organisations
          </NavLink>
          <NavLink href="/dashboard/events" icon={<Calendar className="w-5 h-5" />}>
            Événements
          </NavLink>
          <NavLink href='/dashboard/archive' icon={<Archive className="w-5 h-5" />}>
            Archives
          </NavLink>
          <NavLink href='/dashboard/congres' icon={<Star className="w-5 h-5" />}>
            Congres
          </NavLink>
        </nav>
        <a
            href='/auth/register'
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200 mt-auto mb-4"
          >
            <Plus className="w-5 h-5 mr-3 text-gray-600" />
            Ajouter un Admin
          </a>
      
          <button
            onClick={handleLogout}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200 mt-auto mb-4"
          >
            <LogOut className="w-5 h-5 mr-3 text-gray-600" />
            Déconnexion
          </button>
      
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="mt-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
       flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
    >
      <span className="mr-3 text-gray-600">{icon}</span>
      {children}
    </Link>
  );
}