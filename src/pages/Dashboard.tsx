import { LineChart, Line } from 'recharts';

const Dashboard = () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  return (
    <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#191730" className='bg-red' />
    </LineChart>
  )
}

export default Dashboard