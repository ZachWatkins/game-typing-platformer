
const StatsView = document.createElement('div')
StatsView.id = 'stats'
StatsView.className = 'stats'
StatsView.style.position = 'absolute'
StatsView.style.right = '0'
StatsView.style.top = '0'
StatsView.style.width = '200px'
StatsView.style.minHeight = '200px'
StatsView.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
StatsView.style.color = 'white'
StatsView.style.fontFamily = 'monospace'
StatsView.style.fontSize = '12px'
StatsView.style.padding = '10px'
StatsView.style.boxSizing = 'border-box'
StatsView.style.zIndex = '1000'
StatsView.style.whiteSpace = 'pre'
document.body.appendChild(StatsView)

export function updateStats(value: any) {
    StatsView.innerHTML = JSON.stringify(value, null, 2)
}
