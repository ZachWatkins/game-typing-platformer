let instance: Node;

export function createRoot(parent: Node) {
    instance = parent
    return {
        render: (child: () => Node): void => {
            parent.appendChild(child())
        }
    }
}
