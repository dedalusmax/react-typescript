interface DataGridProps<T> {
    items: T[];
}

export function DataGrid<T>({items}: DataGridProps<T>) {
    return (
        <>
            <ul>
                {items.map((item: any) => (
                <li>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </>
    );
}