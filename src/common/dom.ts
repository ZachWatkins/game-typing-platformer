/**
 * Create the root application container.
 */
export function createRoot(container: HTMLElement | null) {
    return {
        render: function (component: any) {
            if (!container) {
                container = document.body
            }
            if (typeof component === 'function') {
                component = component()
            }
            if (typeof component === 'string') {
                component = component.trim()
                container.innerHTML = component
            } else {
                container.innerHTML = ''
                container.appendChild(component)
            }
        }
    }
}
