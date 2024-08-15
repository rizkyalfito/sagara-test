import flowImage from '../assets/img/flow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faCreditCard, faClipboardCheck, faCertificate } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    title: "#1 Register Account",
    description: "Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.",
    icon: faUser
  },
  {
    title: "#2 Select the Type",
    description: "Choose from a variety of IT certification options tailored to your career goals and interests. Select the certification that aligns with your expertise.",
    icon: faList
  },
  {
    title: "#3 Register and Pay",
    description: "Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.",
    icon: faCreditCard
  },
  {
    title: "#4 Take Test",
    description: "Prepare for your certification exam and schedule a convenient time to take the test online.",
    icon: faClipboardCheck
  },
  {
    title: "#5 Get the Certificate",
    description: "Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.",
    icon: faCertificate
  }
];

export default function SertificationFlow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center p-4">
        <img
          src={flowImage}
          alt="Certification Flow"
          className="w-[300px] h-auto rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center p-4">
        <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {steps.map((step, index) => (
            <li key={index} className={`mb-8 ${index !== 0 ? 'pl-8' : 'pl-0'} relative`}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <FontAwesomeIcon icon={step.icon} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </span>
              <div className="ml-10">
                <h3 className="font-medium leading-tight text-base text-[#A51535]">{step.title}</h3>
                <p className="text-xs text-[#666]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
