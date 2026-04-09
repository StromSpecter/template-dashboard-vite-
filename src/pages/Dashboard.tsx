import { Badge, Button } from "../components/base";
import {
  ChartLine,
  StatCard,
  IncomeCard,
  ReminderCard,
  TeamCard,
  ProjectCard,
} from "../components/ui";

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
        {/* Statistics Cards */}
        {headerData.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle="In the last 1 month"
          />
        ))}

        {/* Total Income Card */}
        <IncomeCard
          income="Rp. 350.000.000"
          badge={{
            text: "+15% from last month",
            variant: "info",
          }}
        />

        {/* Reminder Card */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <ReminderCard
            title="Meeting with team"
            time="Today, 2:00 PM"
            buttonLabel="Start Meeting"
          />
        </div>

        {/* Team Collaboration Section */}
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
            {teamsData.map((team) => (
              <TeamCard
                key={team.name}
                name={team.name}
                role={team.role}
                members={team.members}
              />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Projects</p>
            <Button variant="border" size="sm">
              Add Project
            </Button>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                status={project.status as "Running" | "Pending" | "Completed"}
                progress={project.progress}
                members={project.members}
              />
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="w-full h-full flex flex-col gap-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Activities</p>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {activitiesData.map((activity) => (
              <div
                key={activity.user}
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
        {/* Statistics Cards */}
        {headerData.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle="In the last 1 month"
          />
        ))}

        {/* Income Chart */}
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

        {/* Team Collaboration Section */}
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
            {teamsData.map((team) => (
              <TeamCard
                key={team.name}
                name={team.name}
                role={team.role}
                members={team.members}
              />
            ))}
          </div>
        </div>

        {/* Reminder Card */}
        <div className="w-full h-full flex flex-col gap-2 p-4 row-span-2 col-start-3 row-start-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <ReminderCard
            title="Meeting with team"
            time="Today, 2:00 PM"
            buttonLabel="Start Meeting"
          />
        </div>

        {/* Projects Section */}
        <div className="w-full h-full flex flex-col gap-2 p-4 row-span-2 col-start-4 row-start-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Projects</p>
            <Button variant="border" size="sm">
              Add Project
            </Button>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                status={project.status as "Running" | "Pending" | "Completed"}
                progress={project.progress}
                members={project.members}
              />
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="w-full h-full flex flex-col gap-2 p-4 row-span-2 col-span-2 col-start-3 row-start-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between">
            <p className="text-lg font-medium text-slate-900">Activities</p>
          </div>
          <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
            {activitiesData.map((activity) => (
              <div
                key={activity.user}
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
