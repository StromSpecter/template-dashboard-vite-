import { RiArrowRightLine } from "react-icons/ri";
import { Badge, Button } from "../components/base";
import { ChartLine } from "../components/ui";

const headerData = [
  {
    title: "Total Projects",
    value: "20",
  },
  {
    title: "Ended Projects",
    value: "5",
  },
  {
    title: "Running Projects",
    value: "10",
  },
  {
    title: "Pending Projects",
    value: "5",
  },
];

const projectsData = [
  {
    name: "Dashboard UI Kit",
    status: "Running",
    progress: 75,
    members: 5,
  },
  {
    name: "Mobile App Design",
    status: "Pending",
    progress: 40,
    members: 3,
  },
  {
    name: "Landing Page",
    status: "Completed",
    progress: 100,
    members: 4,
  },
];

const teamsData = [
  {
    name: "Frontend Team",
    members: 6,
    role: "UI Development",
  },
  {
    name: "Backend Team",
    members: 4,
    role: "API & Database",
  },
  {
    name: "Design Team",
    members: 3,
    role: "UX Research",
  },
];

const activitiesData = [
  {
    user: "John Doe",
    team: "FE",
    action: "Completed the task 'Design Dashboard UI'",
    time: "2 hours ago",
  },
  {
    user: "Jane Smith",
    team: "BE",
    action: "Started the task 'Implement API for User Authentication'",
    time: "4 hours ago",
  },
  {
    user: "Alice Johnson",
    team: "Design",
    action: "Commented on the task 'Create Wireframes for Mobile App'",
    time: "14 hours ago",
  },
];

export function Dashboard() {
  return (
    <div className="w-full h-full">
      {/* layout mobile */}
      <div className="grid grid-cols-1 gap-4 pl-10 p-6 w-full h-full max-h-screen overflow-y-auto md:hidden">
        {headerData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:text-white hover:bg-linear-to-r from-slate-900 to-slate-700 w-full h-30 p-4 overflow-hidden"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-white warp-break-words">
                {item.title}
              </p>
              <div className="flex items-center justify-center w-10 h-10 border border-slate-200/80 rounded-full shrink-0 bg-white group-hover:-rotate-45 transform transition-all duration-300">
                <RiArrowRightLine
                  size={18}
                  className="text-slate-900 group-hover:text-slate-900"
                />
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-white">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-slate-500 group-hover:text-white warp-break-words absolute bottom-0 left-0 p-4">
              In the last 1 month
            </p>
          </div>
        ))}

        {/* total income */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <p className="text-lg font-medium text-slate-900">Total Income</p>
            <Badge variant="info" className="mt-1">
              +15% from last month
            </Badge>
          </div>
          <div className="text-3xl font-bold text-slate-900">
            Rp. 350.000.000
          </div>
        </div>

        {/* reminder */}
        <div className="w-full h-54 flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Reminder</p>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <p className="text-3xl font-semibold text-slate-900">
                Meeting with team
              </p>
              <p className="text-slate-500">Today, 2:00 PM</p>
            </div>
            <Button variant="primary" size="md" className="w-full rounded-full">
              Start Meeting
            </Button>
          </div>
        </div>

        {/* team collaboration */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">
              Team Collaboration
            </p>
            <Button variant="border" size="sm">
              Add Team
            </Button>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {teamsData.map((team, index) => (
              <div
                key={index}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-800">{team.name}</p>
                  <span className="text-xs text-slate-500">
                    {team.members} members
                  </span>
                </div>

                <p className="text-sm text-slate-500 mt-1">{team.role}</p>

                <div className="flex -space-x-2 mt-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* projects */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Projects</p>
            <Button variant="border" size="sm">
              Add Project
            </Button>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-800">{project.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : project.status === "Running"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-900 transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>{project.progress}%</span>
                  <span>{project.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* activities */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Activities</p>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {activitiesData.map((activity, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <div className="flex flex-col w-full">
                  <div className="w-full flex items-center justify-between">
                    <p className="font-medium text-slate-800">
                      {activity.user}
                    </p>
                    <Badge variant="primary">{activity.team}</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    {activity.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* layout tablet and laptop */}
      <div className="hidden md:grid grid-cols-4 grid-rows-5 gap-4 p-6 w-full h-full">
        {headerData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:text-white hover:bg-linear-to-r from-slate-900 to-slate-700 w-full h-full p-4 overflow-hidden"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-white warp-break-words">
                {item.title}
              </p>
              <div className="flex items-center justify-center w-10 h-10 border border-slate-200/80 rounded-full shrink-0 bg-white group-hover:-rotate-45 transform transition-all duration-300">
                <RiArrowRightLine
                  size={18}
                  className="text-slate-900 group-hover:text-slate-900"
                />
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-white">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-slate-500 group-hover:text-white warp-break-words absolute bottom-0 left-0 p-4">
              In the last 1 month
            </p>
          </div>
        ))}

        <div className="w-full h-full flex flex-col gap-2 col-span-2 row-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
          <p className="text-lg font-medium text-slate-900">Total Income</p>
          <ChartLine
            labels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            data={[
              12000, 15000, 18000, 22000, 25000, 28000, 30000, 32000, 29000,
              31000, 33000, 35000,
            ]}
            title="Total Income"
          />
        </div>

        <div className="w-full h-full flex flex-col gap-2 col-span-2 row-span-2 col-start-1 row-start-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">
              Team Collaboration
            </p>
            <Button variant="border" size="sm">
              Add Team
            </Button>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto pr-1">
            {teamsData.map((team, index) => (
              <div
                key={index}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-800">{team.name}</p>
                  <span className="text-xs text-slate-500">
                    {team.members} members
                  </span>
                </div>

                <p className="text-sm text-slate-500 mt-1">{team.role}</p>

                <div className="flex -space-x-2 mt-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2 p-4 row-span-2 col-start-3 row-start-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Reminder</p>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <p className="text-3xl font-semibold text-slate-900">
                Meeting with team
              </p>
              <p className="text-slate-500">Today, 2:00 PM</p>
            </div>
            <Button variant="primary" size="md" className="w-full rounded-full">
              Start Meeting
            </Button>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2 p-4 row-span-2 col-start-4 row-start-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Projects</p>
            <Button variant="border" size="sm">
              Add Project
            </Button>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-800">{project.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : project.status === "Running"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-900 transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>{project.progress}%</span>
                  <span>{project.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-2 p-4 row-span-2 col-span-2 col-start-3 row-start-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Activities</p>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {activitiesData.map((activity, index) => (
              <div
                key={index}
                className="flex flex-row gap-2 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <div className="border-r pr-4 w-1/4">
                  <span className="text-xs text-slate-500">
                    {activity.time}
                  </span>
                </div>
                <div className="flex flex-col w-3/4">
                  <div className="flex items-center gap-2 justify-between">
                    <p className="font-medium text-slate-800">
                      {activity.user}
                    </p>
                    <Badge variant="primary">{activity.team}</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    {activity.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
