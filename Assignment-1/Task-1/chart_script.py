import plotly.graph_objects as go
import pandas as pd

# India's renewable energy growth data
india_growth_data = [
    {"Year": "2014-15", "Total_RE": 81.22, "Solar": 3.99, "Wind": 23.44},
    {"Year": "2015-16", "Total_RE": 87.02, "Solar": 6.76, "Wind": 28.70},
    {"Year": "2016-17", "Total_RE": 100.23, "Solar": 12.09, "Wind": 32.28},
    {"Year": "2017-18", "Total_RE": 118.74, "Solar": 21.65, "Wind": 35.29},
    {"Year": "2018-19", "Total_RE": 134.39, "Solar": 28.18, "Wind": 35.29},
    {"Year": "2019-20", "Total_RE": 154.31, "Solar": 39.09, "Wind": 38.69},
    {"Year": "2020-21", "Total_RE": 172.00, "Solar": 45.32, "Wind": 38.79},
    {"Year": "2021-22", "Total_RE": 181.84, "Solar": 54.11, "Wind": 40.03},
    {"Year": "2022-23", "Total_RE": 190.57, "Solar": 70.10, "Wind": 41.91},
    {"Year": "2023-24", "Total_RE": 190.57, "Solar": 81.81, "Wind": 45.89}
]

df_growth = pd.DataFrame(india_growth_data)

fig = go.Figure()


fig.add_trace(go.Scatter(
    x=df_growth['Year'],
    y=df_growth['Total_RE'],
    mode='lines+markers',
    name='Total RE',
    line=dict(color='#1FB8CD', width=3),
    marker=dict(size=6),
    cliponaxis=False,
    hovertemplate='<b>%{x}</b><br>Total RE: %{y} GW<extra></extra>'
))

fig.add_trace(go.Scatter(
    x=df_growth['Year'],
    y=df_growth['Solar'],
    mode='lines+markers',
    name='Solar',
    line=dict(color='#DB4545', width=3),
    marker=dict(size=6),
    cliponaxis=False,
    hovertemplate='<b>%{x}</b><br>Solar: %{y} GW<extra></extra>'
))

fig.add_trace(go.Scatter(
    x=df_growth['Year'],
    y=df_growth['Wind'],
    mode='lines+markers',
    name='Wind',
    line=dict(color='#2E8B57', width=3),
    marker=dict(size=6),
    cliponaxis=False,
    hovertemplate='<b>%{x}</b><br>Wind: %{y} GW<extra></extra>'
))

fig.update_layout(
    title="India's Renewable Energy Growth",
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

fig.update_xaxes(title_text='Year', tickangle=45)
fig.update_yaxes(title_text='Capacity (GW)')

# Save the chart
fig.write_image('india_renewable_growth.png')
