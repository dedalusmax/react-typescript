interface Item {
    id: number;
}

interface DataGridProps<T> {
    items: T[];
}

export function DataGrid<T extends Item>({items}: DataGridProps<T>) {
    return (
        <>
            <ul>
                {items.map((item: any) => (
                <li key={item.id}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </>
    );
}