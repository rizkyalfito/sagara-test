import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const studentData = {
    labels: ['Back End', 'Front End', 'Quality Assurance', 'UI/UX'],
    datasets: [
      {
        label: 'Number of Students',
        data: [100, 200, 150, 120], // Data for each category
        backgroundColor: ['#A51535', '#A51535', '#A51535', '#A51535'], // Colors for each bar
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12, // Smaller font size for legend
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Category',
          font: {
            size: 14, // Smaller font size for x-axis title
          },
        },
        ticks: {
          font: {
            size: 12, // Smaller font size for x-axis labels
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
          font: {
            size: 14, // Smaller font size for y-axis title
          },
        },
        ticks: {
          font: {
            size: 12, // Smaller font size for y-axis labels
          },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">Dashboard</h1>

      {/* Card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-3 rounded-lg shadow-md">
          <h2 className="text-md font-medium text-gray-700">Total Students</h2>
          <p className="text-xl font-bold text-gray-900">513</p>
          <p className="text-xs text-green-600">8.5% Up from yesterday</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-3 rounded-lg shadow-md">
          <h2 className="text-md font-medium text-gray-700">Total Certified Students</h2>
          <p className="text-xl font-bold text-gray-900">489</p>
          <p className="text-xs text-green-600">8.5% Up from yesterday</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-3 rounded-lg shadow-md">
          <h2 className="text-md font-medium text-gray-700">Average Certification Score</h2>
          <p className="text-xl font-bold text-gray-900">84.62</p>
          <p className="text-xs text-green-600">8.5% Up from yesterday</p>
        </div>
      </div>

      {/* Bar chart */}
      <div className="bg-white p-3 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">Student Distribution</h2>
        <div className="h-48 md:h-60 lg:h-96">
          <Bar data={studentData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
