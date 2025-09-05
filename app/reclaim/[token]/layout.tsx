export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#142340] to-[#54baec]">
            {children}
        </div>
    );
}
