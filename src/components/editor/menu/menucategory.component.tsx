type MenuProps = {
    children: React.ReactNode;
    title: string;
};

export default function MenuCategory({ children, title }: MenuProps) {
    return (
        <>
            <div className="font-bold text-title-secondary font-title mx-5 text-md border-b border-gray-800 mb-3 pb-2">{title}</div>
            <div className="flex-col space-y-4">{children}</div>
        </>
    );
}
