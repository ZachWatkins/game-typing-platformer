export function createRoot(parent: Node) {
    return {
        render: (child: () => Node): void => {
            parent.appendChild(child())
        }
    }
}
