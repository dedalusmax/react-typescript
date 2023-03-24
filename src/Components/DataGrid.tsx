export function DataGrid({items}: any) {
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