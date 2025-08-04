# Global renewable energy capacity data for comparison with India
global_capacity_data = {
    'Country': ['China', 'USA', 'Brazil', 'India', 'Germany', 'Japan', 'Australia', 'Spain', 'Italy', 'Canada'],
    'Total_RE_Capacity_GW_2023': [1453.7, 385.2, 194.1, 175.9, 166.9, 121.5, 70.3, 68.2, 65.8, 64.5],
    'Solar_Capacity_GW_2023': [502.0, 139.0, 16.1, 70.1, 82.0, 95.0, 30.8, 28.0, 30.3, 10.8],
    'Wind_Capacity_GW_2023': [421.0, 148.0, 21.1, 75.1, 69.0, 7.7, 21.3, 30.6, 12.0, 18.0],
    'Hydro_Capacity_GW_2023': [413.0, 80.0, 109.9, 47.0, 5.6, 22.8, 8.9, 17.0, 18.9, 85.4],
    'Population_2023_Million': [1412, 335, 215, 1428, 84, 125, 26, 47, 59, 39]
}

global_df = pd.DataFrame(global_capacity_data)

# Calculate per capita renewable capacity
global_df['RE_Capacity_per_capita_kW'] = (global_df['Total_RE_Capacity_GW_2023'] * 1000) / global_df['Population_2023_Million']

print("Global Renewable Energy Capacity by Country (2023)")
print("=" * 60)
print(global_df[['Country', 'Total_RE_Capacity_GW_2023', 'Solar_Capacity_GW_2023', 'Wind_Capacity_GW_2023', 'Hydro_Capacity_GW_2023', 'RE_Capacity_per_capita_kW']].to_string(index=False))

# Global renewable energy generation data
global_generation_data = {
    'Country': ['China', 'USA', 'Brazil', 'Canada', 'India', 'Germany', 'Japan', 'Russia', 'Norway', 'Spain'],
    'Total_RE_Generation_TWh_2023': [2894.1, 973.7, 631.5, 421.2, 382.0, 272.4, 223.5, 209.1, 150.9, 142.0],
    'Solar_Generation_TWh_2023': [584.2, 240.5, 51.5, 7.6, 113.4, 61.2, 97.0, 2.6, 0.5, 46.8],
    'Wind_Generation_TWh_2023': [885.9, 429.5, 95.5, 38.9, 82.1, 142.1, 10.0, 4.7, 14.0, 64.2],
    'Hydro_Generation_TWh_2023': [1226.0, 236.3, 428.7, 364.2, 149.2, 19.6, 74.5, 200.9, 136.1, 25.5]
}

global_gen_df = pd.DataFrame(global_generation_data)

print("\n\nGlobal Renewable Energy Generation by Country (2023)")
print("=" * 60)
print(global_gen_df.to_string(index=False))

# Calculate India's rankings
print("\n\nIndia's Global Rankings (2023):")
print("=" * 40)
india_re_capacity_rank = (global_df['Total_RE_Capacity_GW_2023'] > 175.9).sum() + 1
india_re_generation_rank = (global_gen_df['Total_RE_Generation_TWh_2023'] > 382.0).sum() + 1
india_per_capita_rank = (global_df['RE_Capacity_per_capita_kW'] > global_df[global_df['Country'] == 'India']['RE_Capacity_per_capita_kW'].iloc[0]).sum() + 1

print(f"India RE Capacity Ranking: {india_re_capacity_rank}th globally")
print(f"India RE Generation Ranking: {india_re_generation_rank}th globally")
print(f"India Per Capita RE Capacity Ranking: {india_per_capita_rank}th globally")

# China 2024 updated data
print("\n\nChina 2024 Updated Data:")
print("=" * 30)
print("Total Capacity: 3,349 GW")
print("RE Capacity: 1,889 GW (56% of total)")
print("Solar Capacity: 887 GW")
print("Wind Capacity: 521 GW")
print("Hydro Capacity: 436 GW")
print("RE Generation: 3,460 TWh (35% of total)")

# USA 2024 updated data  
print("\n\nUSA 2024 Updated Data:")
print("=" * 30)
print("Total Clean Energy Capacity: ~313 GW")
print("New Capacity Added in 2024: 49 GW (93% clean energy)")
print("Solar: 34 GW added in 2024")
print("Wind: ~154 GW total capacity")
print("Energy Storage: 13 GW added in 2024")