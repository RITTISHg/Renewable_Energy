// India Renewable Energy Dashboard JavaScript

// Data
const indiaYearlyData = [
    {"year": "2014-15", "total_re": 81.22, "solar": 3.99, "wind": 23.44, "bio": 8.55, "small_hydro": 4.06, "large_hydro": 40.71, "total_generation": 190.96},
    {"year": "2015-16", "total_re": 87.02, "solar": 6.76, "wind": 28.70, "bio": 8.60, "small_hydro": 4.15, "large_hydro": 40.81, "total_generation": 210.25},
    {"year": "2016-17", "total_re": 100.23, "solar": 12.09, "wind": 32.28, "bio": 8.70, "small_hydro": 4.25, "large_hydro": 42.91, "total_generation": 251.14},
    {"year": "2017-18", "total_re": 118.74, "solar": 21.65, "wind": 35.29, "bio": 8.80, "small_hydro": 4.35, "large_hydro": 48.65, "total_generation": 289.29},
    {"year": "2018-19", "total_re": 134.39, "solar": 28.18, "wind": 35.29, "bio": 9.30, "small_hydro": 4.45, "large_hydro": 57.17, "total_generation": 305.02},
    {"year": "2019-20", "total_re": 154.31, "solar": 39.09, "wind": 38.69, "bio": 9.95, "small_hydro": 4.70, "large_hydro": 61.88, "total_generation": 318.19},
    {"year": "2020-21", "total_re": 172.00, "solar": 45.32, "wind": 38.79, "bio": 10.15, "small_hydro": 4.75, "large_hydro": 72.99, "total_generation": 314.73},
    {"year": "2021-22", "total_re": 181.84, "solar": 54.11, "wind": 40.03, "bio": 10.35, "small_hydro": 4.80, "large_hydro": 72.55, "total_generation": 356.32},
    {"year": "2022-23", "total_re": 190.57, "solar": 70.10, "wind": 41.91, "bio": 10.75, "small_hydro": 4.90, "large_hydro": 62.91, "total_generation": 382.98},
    {"year": "2023-24", "total_re": 190.57, "solar": 81.81, "wind": 45.89, "bio": 10.95, "small_hydro": 5.00, "large_hydro": 46.93, "total_generation": 359.89}
];

const globalComparisonData = [
    {"country": "China", "total_re": 1453.7, "solar": 502.0, "wind": 421.0, "hydro": 413.0, "generation": 2894.1, "per_capita": 1029.5},
    {"country": "USA", "total_re": 385.2, "solar": 139.0, "wind": 148.0, "hydro": 80.0, "generation": 973.7, "per_capita": 1149.9},
    {"country": "Brazil", "total_re": 194.1, "solar": 16.1, "wind": 21.1, "hydro": 109.9, "generation": 631.5, "per_capita": 902.8},
    {"country": "India", "total_re": 175.9, "solar": 70.1, "wind": 75.1, "hydro": 47.0, "generation": 382.0, "per_capita": 123.2},
    {"country": "Germany", "total_re": 166.9, "solar": 82.0, "wind": 69.0, "hydro": 5.6, "generation": 272.4, "per_capita": 1986.9},
    {"country": "Japan", "total_re": 121.5, "solar": 95.0, "wind": 7.7, "hydro": 22.8, "generation": 223.5, "per_capita": 972.0},
    {"country": "Australia", "total_re": 70.3, "solar": 30.8, "wind": 21.3, "hydro": 8.9, "generation": 95.2, "per_capita": 2703.8},
    {"country": "Spain", "total_re": 68.2, "solar": 28.0, "wind": 30.6, "hydro": 17.0, "generation": 142.0, "per_capita": 1451.1},
    {"country": "Italy", "total_re": 65.8, "solar": 30.3, "wind": 12.0, "hydro": 18.9, "generation": 114.0, "per_capita": 1115.3},
    {"country": "Canada", "total_re": 64.5, "solar": 10.8, "wind": 18.0, "hydro": 85.4, "generation": 421.2, "per_capita": 1653.8}
];

const stateWiseData = [
    {"state": "Gujarat", "capacity": 27.46, "share": 14.41, "solar": 13.54, "wind": 11.72, "generation": 43.04},
    {"state": "Rajasthan", "capacity": 27.10, "share": 14.22, "solar": 21.35, "wind": 5.20, "generation": 48.16},
    {"state": "Tamil Nadu", "capacity": 22.16, "share": 11.63, "solar": 8.21, "wind": 10.61, "generation": 33.17},
    {"state": "Karnataka", "capacity": 21.44, "share": 11.25, "solar": 8.55, "wind": 6.02, "generation": 39.50},
    {"state": "Maharashtra", "capacity": 17.53, "share": 9.20, "solar": 6.25, "wind": 5.21, "generation": 24.03}
];

const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global chart instances
let charts = {};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCharts();
    populateTables();
    initializeFilters();
    initializeExport();
    animateProgress();
});

// Tab navigation - Fixed implementation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active states from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('tab-btn--active'));
            tabPanels.forEach(panel => {
                panel.classList.remove('tab-panel--active');
                panel.style.display = 'none';
            });
            
            // Add active state to clicked button
            button.classList.add('tab-btn--active');
            
            // Show the target panel
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('tab-panel--active');
                targetPanel.style.display = 'block';
                
                // Re-render charts when switching tabs to ensure proper display
                setTimeout(() => {
                    Object.values(charts).forEach(chart => {
                        if (chart && typeof chart.resize === 'function') {
                            chart.resize();
                        }
                    });
                }, 100);
            }
        });
    });
}

// Initialize all charts
function initializeCharts() {
    // Wait for DOM to be ready
    setTimeout(() => {
        createGrowthChart();
        createEnergyMixChart();
        createGlobalComparisonChart();
        createPerCapitaChart();
        createTechnologyTrendsChart();
        createGrowthRatesChart();
        createScenarioChart();
    }, 100);
}

// India's Growth Chart
function createGrowthChart() {
    const canvas = document.getElementById('growthChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    charts.growthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: indiaYearlyData.map(d => d.year),
            datasets: [
                {
                    label: 'Total RE Capacity',
                    data: indiaYearlyData.map(d => d.total_re),
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Solar',
                    data: indiaYearlyData.map(d => d.solar),
                    borderColor: colors[1],
                    backgroundColor: colors[1] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Wind',
                    data: indiaYearlyData.map(d => d.wind),
                    borderColor: colors[2],
                    backgroundColor: colors[2] + '20',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Capacity (GW)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

// Energy Mix Pie Chart
function createEnergyMixChart() {
    const canvas = document.getElementById('energyMixChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const latestData = indiaYearlyData[indiaYearlyData.length - 1];
    
    charts.energyMixChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Solar', 'Wind', 'Large Hydro', 'Biomass', 'Small Hydro'],
            datasets: [{
                data: [
                    latestData.solar,
                    latestData.wind,
                    latestData.large_hydro,
                    latestData.bio,
                    latestData.small_hydro
                ],
                backgroundColor: colors.slice(0, 5),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} GW (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Global Comparison Chart
function createGlobalComparisonChart() {
    const canvas = document.getElementById('globalComparisonChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    charts.globalComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: globalComparisonData.map(d => d.country),
            datasets: [{
                label: 'Total RE Capacity (GW)',
                data: globalComparisonData.map(d => d.total_re),
                backgroundColor: colors[0],
                borderColor: colors[0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Capacity (GW)'
                    }
                }
            }
        }
    });
}

// Per Capita Chart
function createPerCapitaChart() {
    const canvas = document.getElementById('perCapitaChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const sortedData = [...globalComparisonData].sort((a, b) => b.per_capita - a.per_capita);
    
    charts.perCapitaChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedData.map(d => d.country),
            datasets: [{
                label: 'Per Capita Capacity (W/person)',
                data: sortedData.map(d => d.per_capita),
                backgroundColor: colors[1],
                borderColor: colors[1],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Watts per Person'
                    }
                }
            }
        }
    });
}

// Technology Trends Chart
function createTechnologyTrendsChart() {
    const canvas = document.getElementById('technologyTrendsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    charts.technologyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: indiaYearlyData.map(d => d.year),
            datasets: [
                {
                    label: 'Solar',
                    data: indiaYearlyData.map(d => d.solar),
                    borderColor: colors[1],
                    backgroundColor: colors[1] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Wind',
                    data: indiaYearlyData.map(d => d.wind),
                    borderColor: colors[2],
                    backgroundColor: colors[2] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Biomass',
                    data: indiaYearlyData.map(d => d.bio),
                    borderColor: colors[3],
                    backgroundColor: colors[3] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Small Hydro',
                    data: indiaYearlyData.map(d => d.small_hydro),
                    borderColor: colors[4],
                    backgroundColor: colors[4] + '20',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Capacity (GW)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

// Growth Rates Chart
function createGrowthRatesChart() {
    const canvas = document.getElementById('growthRatesChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Calculate annual growth rates
    const growthRates = {
        solar: [],
        wind: [],
        bio: [],
        small_hydro: []
    };
    
    for (let i = 1; i < indiaYearlyData.length; i++) {
        const prev = indiaYearlyData[i - 1];
        const curr = indiaYearlyData[i];
        
        growthRates.solar.push(((curr.solar - prev.solar) / prev.solar * 100).toFixed(1));
        growthRates.wind.push(((curr.wind - prev.wind) / prev.wind * 100).toFixed(1));
        growthRates.bio.push(((curr.bio - prev.bio) / prev.bio * 100).toFixed(1));
        growthRates.small_hydro.push(((curr.small_hydro - prev.small_hydro) / prev.small_hydro * 100).toFixed(1));
    }
    
    charts.growthRatesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: indiaYearlyData.slice(1).map(d => d.year),
            datasets: [
                {
                    label: 'Solar Growth %',
                    data: growthRates.solar,
                    backgroundColor: colors[1],
                },
                {
                    label: 'Wind Growth %',
                    data: growthRates.wind,
                    backgroundColor: colors[2],
                },
                {
                    label: 'Biomass Growth %',
                    data: growthRates.bio,
                    backgroundColor: colors[3],
                },
                {
                    label: 'Small Hydro Growth %',
                    data: growthRates.small_hydro,
                    backgroundColor: colors[4],
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Annual Growth Rate (%)'
                    }
                }
            }
        }
    });
}

// Scenario Chart
function createScenarioChart() {
    const canvas = document.getElementById('scenarioChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030'];
    const current = 190.57;
    const target = 500;
    
    // Conservative scenario: 25 GW/year
    const conservative = years.map((year, i) => current + (i * 25));
    
    // Realistic scenario: 51.57 GW/year (required rate)
    const realistic = years.map((year, i) => current + (i * 51.57));
    
    // Optimistic scenario: 75 GW/year
    const optimistic = years.map((year, i) => current + (i * 75));
    
    charts.scenarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Conservative (25 GW/year)',
                    data: conservative,
                    borderColor: colors[3],
                    backgroundColor: colors[3] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Realistic (51.57 GW/year)',
                    data: realistic,
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Optimistic (75 GW/year)',
                    data: optimistic,
                    borderColor: colors[1],
                    backgroundColor: colors[1] + '20',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: '2030 Target',
                    data: Array(years.length).fill(target),
                    borderColor: colors[2],
                    backgroundColor: colors[2] + '20',
                    borderDash: [5, 5],
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Capacity (GW)'
                    }
                }
            }
        }
    });
}

// Populate tables
function populateTables() {
    // State-wise table
    const stateTableBody = document.getElementById('stateTableBody');
    if (stateTableBody) {
        stateWiseData.forEach(state => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${state.state}</td>
                <td>${state.capacity}</td>
                <td>${state.share}%</td>
                <td>${state.generation}</td>
            `;
            stateTableBody.appendChild(row);
        });
    }
    
    // Global comparison table
    const comparisonTableBody = document.getElementById('comparisonTableBody');
    if (comparisonTableBody) {
        const topCountries = globalComparisonData.slice(0, 4);
        topCountries.forEach(country => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${country.country}</td>
                <td>${country.total_re}</td>
                <td>${country.solar}</td>
                <td>${country.wind}</td>
                <td>${country.per_capita}</td>
            `;
            comparisonTableBody.appendChild(row);
        });
    }
}

// Initialize filters
function initializeFilters() {
    const filters = ['solarFilter', 'windFilter', 'bioFilter', 'hydroFilter'];
    
    filters.forEach(filterId => {
        const filterElement = document.getElementById(filterId);
        if (filterElement) {
            filterElement.addEventListener('change', updateTechnologyChart);
        }
    });
}

function updateTechnologyChart() {
    if (!charts.technologyChart) return;
    
    const solarVisible = document.getElementById('solarFilter')?.checked ?? true;
    const windVisible = document.getElementById('windFilter')?.checked ?? true;
    const bioVisible = document.getElementById('bioFilter')?.checked ?? true;
    const hydroVisible = document.getElementById('hydroFilter')?.checked ?? true;
    
    charts.technologyChart.data.datasets[0].hidden = !solarVisible;
    charts.technologyChart.data.datasets[1].hidden = !windVisible;
    charts.technologyChart.data.datasets[2].hidden = !bioVisible;
    charts.technologyChart.data.datasets[3].hidden = !hydroVisible;
    
    charts.technologyChart.update();
}

// Initialize export functionality - Fixed implementation
function initializeExport() {
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', (e) => {
            e.preventDefault();
            exportData();
        });
    }
}

function exportData() {
    try {
        // Prepare CSV data
        const csvData = [
            ['Year', 'Total RE (GW)', 'Solar (GW)', 'Wind (GW)', 'Biomass (GW)', 'Small Hydro (GW)', 'Large Hydro (GW)', 'Generation (TWh)'],
            ...indiaYearlyData.map(d => [
                d.year,
                d.total_re,
                d.solar,
                d.wind,
                d.bio,
                d.small_hydro,
                d.large_hydro,
                d.total_generation
            ])
        ];
        
        // Convert to CSV string
        const csvString = csvData.map(row => row.join(',')).join('\n');
        
        // Create and download file
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        link.href = url;
        link.download = 'india_renewable_energy_data.csv';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
        }, 100);
        
        // Show success feedback
        const originalText = document.getElementById('exportBtn').innerHTML;
        document.getElementById('exportBtn').innerHTML = '<span>✓</span> Downloaded!';
        setTimeout(() => {
            document.getElementById('exportBtn').innerHTML = originalText;
        }, 2000);
        
    } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try again.');
    }
}

// Animate progress bar
function animateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const progressPercent = parseFloat(progressFill.dataset.progress);
        
        setTimeout(() => {
            progressFill.style.width = progressPercent + '%';
        }, 500);
    }
}