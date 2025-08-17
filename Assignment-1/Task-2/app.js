// Energy data for all Indian states
const energyData = {
  "Andhra Pradesh": {
    "coal_reserves": {"proved": 1025, "indicated": 2369, "inferred": 778, "total": 4172, "percentage": 1.07},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 11.11, "crude_oil_pct": 1.66, "natural_gas": 59.27, "natural_gas_pct": 5.42},
    "renewable_potential": {"wind": 123336, "small_hydro": 409, "biomass": 1999, "cogeneration": 280, "solar": 38440, "large_hydro": 2596, "total": 167060, "percentage": 7.92},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Arunachal Pradesh": {
    "coal_reserves": {"proved": 31, "indicated": 40, "inferred": 19, "total": 90, "percentage": 0.02},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 2.97, "crude_oil_pct": 0.44, "natural_gas": 7.33, "natural_gas_pct": 0.67},
    "renewable_potential": {"wind": 246, "small_hydro": 2065, "biomass": 18, "cogeneration": 0, "solar": 8650, "large_hydro": 50394, "total": 61373, "percentage": 2.91},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Assam": {
    "coal_reserves": {"proved": 465, "indicated": 57, "inferred": 3, "total": 525, "percentage": 0.13},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 148.13, "crude_oil_pct": 22.13, "natural_gas": 164.51, "natural_gas_pct": 15.03},
    "renewable_potential": {"wind": 459, "small_hydro": 202, "biomass": 322, "cogeneration": 0, "solar": 13760, "large_hydro": 643, "total": 15386, "percentage": 0.73},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Bihar": {
    "coal_reserves": {"proved": 2346, "indicated": 3015, "inferred": 37, "total": 5398, "percentage": 1.39},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 4023, "small_hydro": 527, "biomass": 964, "cogeneration": 347, "solar": 11200, "large_hydro": 130, "total": 17191, "percentage": 0.81},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Chhattisgarh": {
    "coal_reserves": {"proved": 40078, "indicated": 41093, "inferred": 1495, "total": 82666, "percentage": 21.23},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 2749, "small_hydro": 1098, "biomass": 354, "cogeneration": 0, "solar": 18270, "large_hydro": 1311, "total": 23782, "percentage": 1.13},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Goa": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 14, "small_hydro": 5, "biomass": 33, "cogeneration": 0, "solar": 880, "large_hydro": 0, "total": 932, "percentage": 0.04},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Gujarat": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"proved": 1279, "indicated": 284, "inferred": 1160, "total": 2722, "percentage": 5.76},
    "oil_gas_reserves": {"crude_oil": 120.33, "crude_oil_pct": 17.97, "natural_gas": 55.46, "natural_gas_pct": 5.07},
    "renewable_potential": {"wind": 180790, "small_hydro": 202, "biomass": 2638, "cogeneration": 555, "solar": 35770, "large_hydro": 550, "total": 220505, "percentage": 10.45},
    "renewable_installed": {"total_re": 27460, "solar": 13535, "wind": 11717, "bio": 2208, "percentage": 14.41}
  },
  "Haryana": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 593, "small_hydro": 107, "biomass": 1353, "cogeneration": 362, "solar": 4560, "large_hydro": 0, "total": 6976, "percentage": 0.33},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Himachal Pradesh": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 239, "small_hydro": 3460, "biomass": 70, "cogeneration": 0, "solar": 33840, "large_hydro": 18305, "total": 55914, "percentage": 2.65},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Jammu & Kashmir": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"proved": 0, "indicated": 20, "inferred": 7, "total": 28, "percentage": 0.06},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 1, "small_hydro": 1707, "biomass": 83, "cogeneration": 0, "solar": 111050, "large_hydro": 12972, "total": 125813, "percentage": 5.96},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Jharkhand": {
    "coal_reserves": {"proved": 59877, "indicated": 27135, "inferred": 4799, "total": 91812, "percentage": 23.58},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 4.86, "natural_gas_pct": 0.44},
    "renewable_potential": {"wind": 16, "small_hydro": 228, "biomass": 146, "cogeneration": 0, "solar": 18180, "large_hydro": 300, "total": 18870, "percentage": 0.89},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Karnataka": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 169251, "small_hydro": 3726, "biomass": 1794, "cogeneration": 1762, "solar": 24700, "large_hydro": 4414, "total": 205648, "percentage": 9.75},
    "renewable_installed": {"total_re": 21440, "solar": 8547, "wind": 6018, "bio": 4875, "percentage": 11.25}
  },
  "Kerala": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"proved": 0, "indicated": 0, "inferred": 10, "total": 10, "percentage": 0.02},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 2621, "small_hydro": 647, "biomass": 778, "cogeneration": 0, "solar": 6110, "large_hydro": 2473, "total": 12629, "percentage": 0.6},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Madhya Pradesh": {
    "coal_reserves": {"proved": 15425, "indicated": 12379, "inferred": 5011, "total": 32815, "percentage": 8.43},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 24.38, "natural_gas_pct": 2.23},
    "renewable_potential": {"wind": 55423, "small_hydro": 820, "biomass": 2516, "cogeneration": 0, "solar": 61660, "large_hydro": 2819, "total": 123239, "percentage": 5.84},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Maharashtra": {
    "coal_reserves": {"proved": 8163, "indicated": 3372, "inferred": 1817, "total": 13352, "percentage": 3.43},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 173868, "small_hydro": 786, "biomass": 2630, "cogeneration": 3917, "solar": 64320, "large_hydro": 3144, "total": 248665, "percentage": 11.79},
    "renewable_installed": {"total_re": 17530, "solar": 6989, "wind": 5439, "bio": 5102, "percentage": 9.2}
  },
  "Manipur": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 0, "small_hydro": 100, "biomass": 62, "cogeneration": 0, "solar": 10630, "large_hydro": 615, "total": 11407, "percentage": 0.54},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Meghalaya": {
    "coal_reserves": {"proved": 96, "indicated": 17, "inferred": 471, "total": 583, "percentage": 0.15},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 55, "small_hydro": 230, "biomass": 69, "cogeneration": 0, "solar": 5860, "large_hydro": 2026, "total": 8240, "percentage": 0.39},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Mizoram": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 0, "small_hydro": 169, "biomass": 3, "cogeneration": 0, "solar": 9090, "large_hydro": 1927, "total": 11189, "percentage": 0.53},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Nagaland": {
    "coal_reserves": {"proved": 9, "indicated": 22, "inferred": 448, "total": 478, "percentage": 0.12},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 2.38, "crude_oil_pct": 0.36, "natural_gas": 0.09, "natural_gas_pct": 0.01},
    "renewable_potential": {"wind": 0, "small_hydro": 182, "biomass": 54, "cogeneration": 0, "solar": 7290, "large_hydro": 325, "total": 7851, "percentage": 0.37},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Odisha": {
    "coal_reserves": {"proved": 53799, "indicated": 39053, "inferred": 6351, "total": 99204, "percentage": 25.47},
    "lignite_reserves": {"proved": 6, "indicated": 0, "inferred": 0, "total": 6, "percentage": 0.01},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 12129, "small_hydro": 286, "biomass": 299, "cogeneration": 0, "solar": 25780, "large_hydro": 2825, "total": 41318, "percentage": 1.96},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Punjab": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 428, "small_hydro": 578, "biomass": 3022, "cogeneration": 414, "solar": 2810, "large_hydro": 1301, "total": 8554, "percentage": 0.41},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Rajasthan": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"proved": 1204, "indicated": 3109, "inferred": 2274, "total": 6586, "percentage": 13.93},
    "oil_gas_reserves": {"crude_oil": 116.68, "crude_oil_pct": 17.43, "natural_gas": 63.55, "natural_gas_pct": 5.81},
    "renewable_potential": {"wind": 284250, "small_hydro": 52, "biomass": 1300, "cogeneration": 0, "solar": 142310, "large_hydro": 411, "total": 428322, "percentage": 20.3},
    "renewable_installed": {"total_re": 27100, "solar": 21345, "wind": 5192, "bio": 563, "percentage": 14.22}
  },
  "Sikkim": {
    "coal_reserves": {"proved": 0, "indicated": 58, "inferred": 43, "total": 101, "percentage": 0.03},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 0, "small_hydro": 267, "biomass": 5, "cogeneration": 0, "solar": 4940, "large_hydro": 6051, "total": 11262, "percentage": 0.53},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Tamil Nadu": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"proved": 5476, "indicated": 21412, "inferred": 10635, "total": 37524, "percentage": 79.34},
    "oil_gas_reserves": {"crude_oil": 8.72, "crude_oil_pct": 1.3, "natural_gas": 36.57, "natural_gas_pct": 3.34},
    "renewable_potential": {"wind": 95107, "small_hydro": 604, "biomass": 1560, "cogeneration": 639, "solar": 17670, "large_hydro": 1785, "total": 117366, "percentage": 5.56},
    "renewable_installed": {"total_re": 21153, "solar": 7482, "wind": 10713, "bio": 2958, "percentage": 11.1}
  },
  "Telangana": {
    "coal_reserves": {"proved": 11257, "indicated": 8497, "inferred": 3452, "total": 23206, "percentage": 5.96},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 54717, "small_hydro": 102, "biomass": 1678, "cogeneration": 117, "solar": 20410, "large_hydro": 1302, "total": 78327, "percentage": 3.71},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Tripura": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0.07, "crude_oil_pct": 0.01, "natural_gas": 28.18, "natural_gas_pct": 2.58},
    "renewable_potential": {"wind": 0, "small_hydro": 47, "biomass": 34, "cogeneration": 0, "solar": 2080, "large_hydro": 0, "total": 2161, "percentage": 0.1},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Uttar Pradesh": {
    "coal_reserves": {"proved": 884, "indicated": 178, "inferred": 0, "total": 1062, "percentage": 0.27},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 510, "small_hydro": 461, "biomass": 2800, "cogeneration": 4926, "solar": 22830, "large_hydro": 502, "total": 32028, "percentage": 1.52},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Uttarakhand": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 49, "small_hydro": 1664, "biomass": 93, "cogeneration": 215, "solar": 16800, "large_hydro": 13481, "total": 32303, "percentage": 1.53},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "West Bengal": {
    "coal_reserves": {"proved": 18752, "indicated": 11433, "inferred": 3773, "total": 33958, "percentage": 8.72},
    "lignite_reserves": {"proved": 0, "indicated": 1, "inferred": 3, "total": 4, "percentage": 0.01},
    "oil_gas_reserves": {"crude_oil": 0.11, "crude_oil_pct": 0.02, "natural_gas": 44.37, "natural_gas_pct": 4.06},
    "renewable_potential": {"wind": 1281, "small_hydro": 392, "biomass": 1742, "cogeneration": 0, "solar": 6260, "large_hydro": 809, "total": 10484, "percentage": 0.5},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  },
  "Delhi": {
    "coal_reserves": {"total": 0, "percentage": 0},
    "lignite_reserves": {"total": 0, "percentage": 0},
    "oil_gas_reserves": {"crude_oil": 0, "natural_gas": 0},
    "renewable_potential": {"wind": 0, "small_hydro": 0, "biomass": 0, "cogeneration": 0, "solar": 2050, "large_hydro": 0, "total": 2050, "percentage": 0.1},
    "renewable_installed": {"total_re": 0, "percentage": 0}
  }
};

// Tooltip content definitions
const tooltipContent = {
  coal: {
    proved: "Coal reserves that have been thoroughly explored and are confirmed to exist",
    indicated: "Coal reserves indicated by geological surveys but not fully proven",
    inferred: "Coal reserves inferred from geological data but with limited exploration"
  },
  lignite: {
    proved: "Confirmed lignite (brown coal) reserves ready for extraction",
    indicated: "Probable lignite reserves based on initial surveys",
    inferred: "Potential lignite reserves requiring further exploration"
  },
  oil_gas: {
    crude_oil: "Proven crude oil reserves in the state",
    natural_gas: "Proven natural gas reserves available for extraction"
  },
  renewable: {
    wind: "Estimated wind energy generation potential at 100m height",
    solar: "Solar energy potential considering land availability and solar irradiance",
    large_hydro: "Hydroelectric power potential from large river systems",
    small_hydro: "Small-scale hydroelectric potential from rivers and streams",
    biomass: "Energy potential from agricultural residues and organic waste",
    cogeneration: "Combined heat and power generation potential"
  },
  installed: {
    solar: "Currently installed solar power capacity",
    wind: "Currently installed wind power capacity",
    bio: "Currently installed biomass and waste-to-energy capacity"
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateDropdowns();
    setDefaultSelections();
});

// Populate state dropdown options
function populateDropdowns() {
    const state1Select = document.getElementById('state1');
    const state2Select = document.getElementById('state2');
    
    const states = Object.keys(energyData).sort();
    
    states.forEach(state => {
        const option1 = new Option(state, state);
        const option2 = new Option(state, state);
        state1Select.add(option1);
        state2Select.add(option2);
    });
    
    // Add event listeners
    state1Select.addEventListener('change', () => updateStateData('state1'));
    state2Select.addEventListener('change', () => updateStateData('state2'));
}

// Set default selections
function setDefaultSelections() {
    document.getElementById('state1').value = 'Rajasthan';
    document.getElementById('state2').value = 'Gujarat';
    updateStateData('state1');
    updateStateData('state2');
}

// Update state data when selection changes
function updateStateData(stateId) {
    const selectElement = document.getElementById(stateId);
    const selectedState = selectElement.value;
    const nameElement = document.getElementById(`${stateId}-name`);
    const dataElement = document.getElementById(`${stateId}-data`);
    
    if (!selectedState) {
        nameElement.textContent = 'Select a State';
        dataElement.innerHTML = '<div class="no-data">Please select a state to view energy data</div>';
        return;
    }
    
    nameElement.textContent = selectedState;
    const stateData = energyData[selectedState];
    dataElement.innerHTML = generateEnergyDataHTML(stateData);
    
    // Update comparisons if both states are selected
    updateComparisons();
}

// Generate HTML for energy data with tooltips
function generateEnergyDataHTML(data) {
    let html = '';
    
    // Coal Reserves
    if (data.coal_reserves && data.coal_reserves.total > 0) {
        html += `
        <div class="energy-category coal-category">
            <div class="category-header">
                <h3 class="category-title">Coal Reserves</h3>
                <span class="category-total">${formatNumber(data.coal_reserves.total)} MT (${data.coal_reserves.percentage}%)</span>
            </div>
            <div class="category-tooltip">
                Coal reserves represent the amount of coal that can be economically extracted. Measured in Million Tonnes (MT).
            </div>
            <div class="data-item">
                <span class="data-label">Proved</span>
                <span class="data-value">${formatNumber(data.coal_reserves.proved)} <span class="data-unit">MT</span></span>
                <div class="tooltip">${tooltipContent.coal.proved}</div>
            </div>
            <div class="data-item">
                <span class="data-label">Indicated</span>
                <span class="data-value">${formatNumber(data.coal_reserves.indicated)} <span class="data-unit">MT</span></span>
                <div class="tooltip">${tooltipContent.coal.indicated}</div>
            </div>
            <div class="data-item">
                <span class="data-label">Inferred</span>
                <span class="data-value">${formatNumber(data.coal_reserves.inferred)} <span class="data-unit">MT</span></span>
                <div class="tooltip">${tooltipContent.coal.inferred}</div>
            </div>
            <div class="progress-bar coal-progress">
                <div class="progress-fill" style="width: ${Math.min(data.coal_reserves.percentage * 4, 100)}%"></div>
            </div>
        </div>`;
    }
    
    // Lignite Reserves
    if (data.lignite_reserves && data.lignite_reserves.total > 0) {
        html += `
        <div class="energy-category lignite-category">
            <div class="category-header">
                <h3 class="category-title">Lignite Reserves</h3>
                <span class="category-total">${formatNumber(data.lignite_reserves.total)} MT (${data.lignite_reserves.percentage}%)</span>
            </div>
            <div class="category-tooltip">
                Lignite is a low-grade brown coal used primarily for power generation. A significant energy resource for thermal power plants.
            </div>`;
        
        if (data.lignite_reserves.proved !== undefined) {
            html += `
            <div class="data-item">
                <span class="data-label">Proved</span>
                <span class="data-value">${formatNumber(data.lignite_reserves.proved)} <span class="data-unit">MT</span></span>
                <div class="tooltip">${tooltipContent.lignite.proved}</div>
            </div>`;
        }
        if (data.lignite_reserves.indicated !== undefined) {
            html += `
            <div class="data-item">
                <span class="data-label">Indicated</span>
                <span class="data-value">${formatNumber(data.lignite_reserves.indicated)} <span class="data-unit">MT</span></span>
                <div class="tooltip">${tooltipContent.lignite.indicated}</div>
            </div>`;
        }
        if (data.lignite_reserves.inferred !== undefined) {
            html += `
            <div class="data-item">
                <span class="data-label">Inferred</span>
                <span class="data-value">${formatNumber(data.lignite_reserves.inferred)} <span class="data-unit">MT</span></span>
                <div class="tooltip">${tooltipContent.lignite.inferred}</div>
            </div>`;
        }
        
        html += `
            <div class="progress-bar lignite-progress">
                <div class="progress-fill" style="width: ${Math.min(data.lignite_reserves.percentage * 1.2, 100)}%"></div>
            </div>
        </div>`;
    }
    
    // Oil & Gas Reserves
    if (data.oil_gas_reserves && (data.oil_gas_reserves.crude_oil > 0 || data.oil_gas_reserves.natural_gas > 0)) {
        html += `
        <div class="energy-category oil-gas-category">
            <div class="category-header">
                <h3 class="category-title">Oil & Gas Reserves</h3>
                <span class="category-total">Crude + Natural Gas</span>
            </div>
            <div class="category-tooltip">
                Proven oil and gas reserves that can be commercially extracted. Critical for energy security and petrochemicals.
            </div>`;
        
        if (data.oil_gas_reserves.crude_oil > 0) {
            html += `
            <div class="data-item">
                <span class="data-label">Crude Oil</span>
                <span class="data-value">${formatNumber(data.oil_gas_reserves.crude_oil)} <span class="data-unit">MT (${data.oil_gas_reserves.crude_oil_pct || 0}%)</span></span>
                <div class="tooltip">${tooltipContent.oil_gas.crude_oil}</div>
            </div>`;
        }
        
        if (data.oil_gas_reserves.natural_gas > 0) {
            html += `
            <div class="data-item">
                <span class="data-label">Natural Gas</span>
                <span class="data-value">${formatNumber(data.oil_gas_reserves.natural_gas)} <span class="data-unit">BCM (${data.oil_gas_reserves.natural_gas_pct || 0}%)</span></span>
                <div class="tooltip">${tooltipContent.oil_gas.natural_gas}</div>
            </div>`;
        }
        
        html += `
            <div class="progress-bar oil-gas-progress">
                <div class="progress-fill" style="width: ${Math.min(((data.oil_gas_reserves.crude_oil_pct || 0) + (data.oil_gas_reserves.natural_gas_pct || 0)) * 4, 100)}%"></div>
            </div>
        </div>`;
    }
    
    // Renewable Energy Potential
    if (data.renewable_potential && data.renewable_potential.total > 0) {
        html += `
        <div class="energy-category renewable-category">
            <div class="category-header">
                <h3 class="category-title">Renewable Energy Potential</h3>
                <span class="category-total">${formatNumber(data.renewable_potential.total)} MW (${data.renewable_potential.percentage}%)</span>
            </div>
            <div class="category-tooltip">
                Technical potential for renewable energy generation based on resource assessment studies by government agencies.
            </div>
            <div class="data-item">
                <span class="data-label">Wind</span>
                <span class="data-value">${formatNumber(data.renewable_potential.wind)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.renewable.wind}</div>
            </div>
            <div class="data-item">
                <span class="data-label">Solar</span>
                <span class="data-value">${formatNumber(data.renewable_potential.solar)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.renewable.solar}</div>
            </div>
            <div class="data-item">
                <span class="data-label">Large Hydro</span>
                <span class="data-value">${formatNumber(data.renewable_potential.large_hydro)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.renewable.large_hydro}</div>
            </div>
            <div class="data-item">
                <span class="data-label">Small Hydro</span>
                <span class="data-value">${formatNumber(data.renewable_potential.small_hydro)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.renewable.small_hydro}</div>
            </div>
            <div class="data-item">
                <span class="data-label">Biomass</span>
                <span class="data-value">${formatNumber(data.renewable_potential.biomass)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.renewable.biomass}</div>
            </div>
            <div class="progress-bar renewable-progress">
                <div class="progress-fill" style="width: ${Math.min(data.renewable_potential.percentage * 4, 100)}%"></div>
            </div>
        </div>`;
    }
    
    // Renewable Energy Installed Capacity
    if (data.renewable_installed && data.renewable_installed.total_re > 0) {
        html += `
        <div class="energy-category installed-category">
            <div class="category-header">
                <h3 class="category-title">Renewable Energy Installed</h3>
                <span class="category-total">${formatNumber(data.renewable_installed.total_re)} MW (${data.renewable_installed.percentage}%)</span>
            </div>
            <div class="category-tooltip">
                Actual renewable energy capacity currently operational and generating electricity in the state.
            </div>`;
        
        if (data.renewable_installed.solar) {
            html += `
            <div class="data-item">
                <span class="data-label">Solar</span>
                <span class="data-value">${formatNumber(data.renewable_installed.solar)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.installed.solar}</div>
            </div>`;
        }
        
        if (data.renewable_installed.wind) {
            html += `
            <div class="data-item">
                <span class="data-label">Wind</span>
                <span class="data-value">${formatNumber(data.renewable_installed.wind)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.installed.wind}</div>
            </div>`;
        }
        
        if (data.renewable_installed.bio) {
            html += `
            <div class="data-item">
                <span class="data-label">Biomass</span>
                <span class="data-value">${formatNumber(data.renewable_installed.bio)} <span class="data-unit">MW</span></span>
                <div class="tooltip">${tooltipContent.installed.bio}</div>
            </div>`;
        }
        
        html += `
            <div class="progress-bar installed-progress">
                <div class="progress-fill" style="width: ${Math.min(data.renewable_installed.percentage * 6, 100)}%"></div>
            </div>
        </div>`;
    }
    
    if (html === '') {
        html = '<div class="empty-state">No significant energy data available for this state</div>';
    }
    
    return html;
}

// Update comparison indicators
function updateComparisons() {
    const state1 = document.getElementById('state1').value;
    const state2 = document.getElementById('state2').value;
    
    if (!state1 || !state2) return;
    
    // This function could be expanded to show comparison indicators
    // For now, the visual comparison is handled through the progress bars
}

// Format numbers with proper thousands separators
function formatNumber(num) {
    if (num === 0) return '0';
    if (num < 1000) return num.toFixed(1);
    if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
    return (num / 1000000).toFixed(1) + 'M';
}