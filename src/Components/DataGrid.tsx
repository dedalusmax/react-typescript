import { User } from "../App";

interface DataGridProps {
    items: User[];
}

export function DataGrid({items}: DataGridProps) {
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