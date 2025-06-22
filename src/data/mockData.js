export const mockTasks = [
  {
    id: 1,
    name: "Update Employee Records",
    startDate: "2024-05-18",
    endDate: "2024-05-26",
    status: "High",
    attachment: "requirements.doc",
    people: [
      { id: 1, name: "Sarah Wilson", avatar: "SW", color: "bg-blue-500" },
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" },
      { id: 3, name: "Lisa Chen", avatar: "LC", color: "bg-purple-500" }
    ],
    category: "todo"
  },
  {
    id: 2,
    name: "Review and Update Job Descriptions",
    startDate: "2024-05-21",
    endDate: "2024-05-27",
    status: "Medium",
    attachment: "file_new.doc",
    people: [
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" },
      { id: 4, name: "Anna Taylor", avatar: "AT", color: "bg-red-500" }
    ],
    category: "todo"
  },
  {
    id: 3,
    name: "Implement New Onboarding Process",
    startDate: "2024-05-26",
    endDate: "2024-05-27",
    status: "High",
    attachment: "onboarding_2024.pdf",
    people: [
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" }
    ],
    category: "todo"
  },
  {
    id: 4,
    name: "Conduct Diversity and Inclusion Training",
    startDate: "2024-05-10",
    endDate: "2024-05-28",
    status: "High",
    attachment: "e134918aks.pdf",
    people: [
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" }
    ],
    category: "todo"
  },
  {
    id: 5,
    name: "Training & Education Program Review",
    startDate: "2024-05-01",
    endDate: "2024-05-29",
    status: "Low",
    attachment: "training_new_emp.pdf",
    people: [
      { id: 5, name: "David Brown", avatar: "DB", color: "bg-yellow-500" }
    ],
    category: "todo"
  },
  {
    id: 6,
    name: "Feedback & Coaching Sessions",
    startDate: "2024-05-21",
    endDate: "2024-05-29",
    status: "High",
    attachment: "coaching_dec_2024.pdf",
    people: [
      { id: 1, name: "Sarah Wilson", avatar: "SW", color: "bg-blue-500" },
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" }
    ],
    category: "todo"
  },
  {
    id: 7,
    name: "Workplace Safety Guidelines",
    startDate: "2024-05-22",
    endDate: "2024-05-30",
    status: "Low",
    attachment: "guidance.pdf",
    people: [
      { id: 1, name: "Sarah Wilson", avatar: "SW", color: "bg-blue-500" },
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" },
      { id: 3, name: "Lisa Chen", avatar: "LC", color: "bg-purple-500" }
    ],
    category: "todo"
  },
  {
    id: 8,
    name: "Payroll Schedule",
    startDate: "2024-05-17",
    endDate: "2024-05-30",
    status: "Medium",
    attachment: "payroll_jul_temp.doc",
    people: [
      { id: 1, name: "Sarah Wilson", avatar: "SW", color: "bg-blue-500" },
      { id: 4, name: "Anna Taylor", avatar: "AT", color: "bg-red-500" }
    ],
    category: "todo"
  },
  {
    id: 9,
    name: "Update Employee Records",
    startDate: "2024-05-21",
    endDate: "2024-05-28",
    status: "High",
    attachment: "employee2024.doc",
    people: [
      { id: 2, name: "Mike Johnson", avatar: "MJ", color: "bg-green-500" },
      { id: 4, name: "Anna Taylor", avatar: "AT", color: "bg-red-500" }
    ],
    category: "progress"
  },
  {
    id: 10,
    name: "Organize Annual Team Building Event",
    startDate: "2024-05-19",
    endDate: "2024-05-28",
    status: "High",
    attachment: "aqoq214192.doc",
    people: [
      { id: 5, name: "David Brown", avatar: "DB", color: "bg-yellow-500" }
    ],
    category: "progress"
  }
]

export const sidebarPages = [
  {
    id: 1,
    name: "HR Tasks Hub",
    icon: "clipboard",
    color: "text-red-500",
    route: "/"
  },
  {
    id: 2,
    name: "Windah Comp",
    icon: "wind",
    color: "text-green-500",
    route: "/windah"
  },
  {
    id: 3,
    name: "NoSpace Dev",
    icon: "code",
    color: "text-yellow-500",
    route: "/nospace"
  }
]

export const privatePages = [
  {
    id: 4,
    name: "Dribbble Portfolio",
    icon: "dribbble",
    color: "text-purple-500",
    route: "/portfolio"
  }
]