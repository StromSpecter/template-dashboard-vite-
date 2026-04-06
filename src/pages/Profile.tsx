import { Button } from "../components/base";
import { Avatar } from "../components/base";

const tabMenu = [
  { name: "My Profile", href: "#", current: true },
  { name: "Notifications", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const personalInfo = {
  firstName: "John",
  lastName: "Doe",
  email: "bK5o7@example.com",
  phone: "+1 (555) 123-4567",
  jobTitle: "Software Engineer",
  address: "123 Main St, Anytown, USA",
};

const addressInfo = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
};

export function Profile() {
  return (
    <div className="w-full h-fit pl-8 p-4 md:p-6">
      <div className="w-full h-fit bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-60 border-b md:border-b-0 md:border-r border-slate-200/80">
          <nav className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-1 p-3 md:p-4">
            {tabMenu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium ${
                  item.current
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            My Profile
          </h2>

          {/* Profile Card */}
          <div className="w-full p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-4 mb-4">
            {/* Avatar */}
            <div className="flex items-center justify-center">
              <Avatar
                fallback={
                  personalInfo.firstName.charAt(0) +
                  personalInfo.lastName.charAt(0)
                }
                alt="Profile Avatar"
                size="xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-center md:justify-between text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                John Doe
              </h3>
              <div className="text-sm text-gray-600 mt-1 md:mt-0">
                <p>john.doe@example.com</p>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="w-full p-4 rounded-2xl border border-slate-200">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
              Personal Information
            </h3>
            <div className="w-full h-full flex flex-col gap-4 md:flex-row">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <p className="text-sm text-gray-600">First Name</p>
                  <p className="text-base font-medium text-gray-900">
                    {personalInfo.firstName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Name</p>
                  <p className="text-base font-medium text-gray-900">
                    {personalInfo.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-base font-medium text-gray-900">
                    {personalInfo.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-base font-medium text-gray-900">
                    {personalInfo.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Title</p>
                  <p className="text-base font-medium text-gray-900">
                    {personalInfo.jobTitle}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="text-base font-medium text-gray-900">
                    {personalInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:items-end">
                <Button variant="primary" className="w-full md:w-auto">
                  Edit
                </Button>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="w-full p-4 rounded-2xl border border-slate-200 mt-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
              Address Information
            </h3>
            <div className="w-full h-full flex flex-col gap-4 md:flex-row">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <p className="text-sm text-gray-600">Street</p>
                  <p className="text-base font-medium text-gray-900">
                    {addressInfo.street}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="text-base font-medium text-gray-900">
                    {addressInfo.city}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">State</p>
                  <p className="text-base font-medium text-gray-900">
                    {addressInfo.state}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Zip Code</p>
                  <p className="text-base font-medium text-gray-900">
                    {addressInfo.zip}
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:items-end">
                <Button variant="primary" className="w-full md:w-auto">
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
