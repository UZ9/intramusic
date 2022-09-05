type MenuProps = {
    children: React.ReactNode;
    title: string;
};

export default function MenuCategory({ children, title }: MenuProps) {
    return (
        <>
            <div className="text-white mx-5 text-md">{title}</div>
            <div className="flex-col space-y-4">{children}</div>
        </>
    );
}
