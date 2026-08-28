/* ==========================================================================
   WorkHub People Growth & Development Workspace - Core Application Logic
   Personalized for: Jenny • People Growth & Development | Date: July 2026 (SGT)
   ========================================================================== */

// Dynamic Asia/Singapore timezone date helpers (prevents UTC shift bugs)
function getTodaySGTStr() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Singapore',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(now);

  const y = parts.find(p => p.type === 'year').value;
  const m = parts.find(p => p.type === 'month').value;
  const d = parts.find(p => p.type === 'day').value;

  return `${y}-${m}-${d}`;
}

function getYesterdaySGTStr() {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Singapore',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(now);

  const y = parts.find(p => p.type === 'year').value;
  const m = parts.find(p => p.type === 'month').value;
  const d = parts.find(p => p.type === 'day').value;

  return `${y}-${m}-${d}`;
}

function getTodayMonthStart() {
  const todayStr = getTodaySGTStr();
  const parts = todayStr.split('-');
  return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, 1);
}

// ==========================================================================
// I18N BILINGUAL DICTIONARY (EN / 简体中文)
// ==========================================================================
const I18N = {
  en: {
    // Header & Greeting
    greetingMorning: 'Good Morning, Jenny!',
    greetingAfternoon: 'Good Afternoon, Jenny!',
    greetingEvening: 'Good Evening, Jenny!',
    searchPlaceholder: 'Search tasks, meetings, projects...',
    btnRefresh: 'Refresh',
    btnExport: 'Export',
    btnRestoreLatestBackup: 'Restore Latest Backup',
    noBackupAvailableYet: 'No backup available yet.',
    btnStartFresh: 'Start Fresh',
    langBtnLabel: 'EN / 中文',

    // Sidebar Navigation
    navDashboard: 'Dashboard',
    navTasks: 'Task Management',
    navCalendar: 'Calendar',
    navReports: 'Reports',
    roleTitle: 'People Growth & Development',

    // Dashboard Titles & KPI Cards
    dashTitle: 'People Growth & Development Dashboard',
    btnAddTask: 'Add New Task',
    kpiTotalTasks: 'Total Tasks',
    kpiOpenTasks: 'Open Tasks',
    kpiCompletedTasks: 'Completed Tasks',
    kpiDueToday: 'Due Today',
    kpiOverdue: 'Overdue',

    // Monthly Task Summary (Dashboard)
    monthlySummaryTitle: 'Monthly Task Summary',
    mthTotalTasks: 'Total Tasks',
    mthCompleted: 'Completed',
    mthInProgress: 'In Progress',
    mthWaiting: 'Waiting',
    mthOverdue: 'Overdue',
    mthCompletionRate: 'Completion Rate',
    mthOnTimeRate: 'On-time Completion Rate',
    mthRemaining: 'Remaining',

    // KPI Daily Comparison Strings
    noComparisonYet: 'No comparison available yet',
    changeNewTasks: '{val} New Tasks',
    changeOpenTasks: '{val} Open Tasks',
    changeCompleted: '{val} Completed',
    changeDueToday: '{val} Due Today',
    changeOverdue: '{val} Overdue Since Yesterday',

    // Charts
    chartStatusTitle: 'Tasks by Status',
    chartStatusSub: '7 Status Categories',
    chartCategoryTitle: 'Tasks by Category',
    chartCategorySub: 'HR, Training, Meeting, Report, System, Others',
    tooltipTaskCount: 'Number of tasks: {count}',
    tooltipClickGuidance: '💡 Click to view matching tasks',
    tooltipAndMore: '...and {count} more',

    // Today's Focus Cards
    focusTitle: 'Today\'s Focus',
    focusSub: 'Interactive Action Matrix',
    focusOverdue: 'Overdue',
    focusDueToday: 'Due Today',
    focusHighPriority: 'High Priority',
    focusWaiting: 'Waiting Follow-up',
    emptyOverdue: 'No overdue tasks',
    emptyDueToday: 'No tasks due today',
    emptyHighPriority: 'No critical/high priority tasks',
    emptyWaiting: 'No pending follow-ups / reviews',

    // Tables & Filters
    recentTasksTitle: 'Recent Tasks (Nearest Due Date)',
    recentTasksSub: 'Sorted by Target Resolution Date',
    thCheckbox: '',
    thTaskName: 'Task Name',
    thTaskTitleDesc: 'Task Title & Description',
    thProject: 'Project',
    thCategory: 'Category',
    thPriority: 'Priority',
    thStatus: 'Status',
    thDueDate: 'Due Date',
    thCompletionDate: 'Completion Date',
    thAssignee: 'Assignee',
    thActions: 'Actions',
    tasksPageTitle: 'Task Management & Repository',
    filterLabel: 'Filters:',
    sortLabel: 'Sort:',
    allProjects: 'All Projects',
    allStatuses: 'All Statuses',
    allPriorities: 'All Priorities',
    allCategories: 'All Categories',
    sortNearFirst: 'Due Date (Nearest First)',
    sortFarFirst: 'Due Date (Furthest First)',
    sortPriority: 'Priority (High to Low)',
    sortTitle: 'Title (A-Z)',
    btnResetFilters: 'Reset Filters',
    btnPrevious: 'Previous',
    btnNext: 'Next',
    taskCountShowing: 'Showing {filtered} of {total} tasks',
    emptyTable: 'No tasks found matching current criteria.',
    activeFilterText: 'Active Filter: {filterDesc}',

    // Calendar
    calPageTitle: 'People Growth & Development Calendar',
    btnAddEvent: 'Add Schedule Event',
    viewMonth: 'Month',
    viewWeek: 'Week',
    viewDay: 'Day',
    btnToday: 'Today',
    calTodayAgenda: 'Today\'s Agenda',
    calUpcomingEvents: 'Upcoming Events',
    calQuickAddTitle: 'Quick Add Event',
    btnQuickAddSubmit: 'Add to Schedule',
    emptyAgenda: 'No events remaining on today\'s agenda.',
    emptyUpcoming: 'No upcoming events scheduled.',
    emptyDayView: 'No events scheduled for this day. Click "Add Schedule Event" to book time.',
    quickTitlePlaceholder: 'Event title...',

    // Reports
    reportsPageTitle: 'People Growth & Development Reports',
    btnDownloadSummary: 'Download Summary Report',
    reportBannerTitle: 'Automated Talent Development Analytics',
    reportBannerSub: 'Q3 2026 People Growth & Training suite is currently in Preview Mode. Comprehensive slide deck exports coming soon.',
    btnGeneratePreliminary: 'Generate Preliminary Report',

    // Reports - Live Analytics
    repOnTimeTitle: 'On-Time Task Resolution',
    repOnTimeSub: '{count} of {total} active tasks on track',
    repOnTimeSubNoTasks: 'No active tasks to measure yet',
    repTrainingLoadTitle: 'Training & Sync Load',
    repTrainingLoadSub: 'This week ({count} Training/Meeting events)',
    repCriticalLoadTitle: 'Critical & High Priority Load',
    repCriticalLoadSub: '{pct}% of total task repository',
    repAlignmentTitle: 'Project Alignment',
    repAlignmentSub: 'Average on-track rate across {count} active projects',
    repAlignmentSubNoProjects: 'No active projects yet',
    repWeeklyChartTitle: 'Task Due-Date Load (Next 6 Weeks)',
    repWeeklyChartWeekLabel: 'Week of {date}',
    repAttainmentChartTitle: 'Project & Category Attainment',
    repAttainmentTasksLabel: '{count} tasks',
    repAttainmentNoTasks: 'No tasks yet',

    // Google Calendar Integration (Phase 1 — read-only)
    gcalConnectBtnLabel: 'Connect Google Calendar',
    gcalConnectedBtn: 'Google Calendar Connected',
    gcalDisconnectBtnLabel: 'Disconnect',
    gcalModalDesc: 'Read your Google Calendar events directly into WorkHub (read-only — WorkHub never modifies your Google Calendar).',
    gcalStatusConnected: 'Connected',
    gcalStatusNotConnected: 'Not connected',
    gcalConnectBtnShort: 'Connect',
    gcalReconnectBtn: 'Reconnect',
    gcalRefreshBtnLabel: 'Refresh Google Calendar',
    gcalSaveClientIdBtn: 'Save Client ID',
    gcalInvalidClientId: 'Please enter a valid Google Client ID',
    gcalClientIdSaved: 'Client ID saved',
    gcalLibraryNotLoaded: 'Google sign-in library has not loaded — check your internet connection',
    gcalFileProtocolWarning: 'Please run WorkHub using a local web server to connect Google Calendar.',
    gcalAuthFailed: 'Google authorization failed — please try again',
    gcalAuthDenied: 'Google Calendar access was denied — WorkHub needs calendar read permission to show your events',
    gcalPopupClosed: 'Google sign-in window was closed before completing',
    gcalPopupBlocked: 'Your browser blocked the Google sign-in popup — please allow popups for this site',
    gcalNotConnectedYet: 'Please connect Google Calendar first',
    gcalTokenExpired: 'Your Google Calendar session expired — please reconnect',
    gcalApiError: 'Google Calendar could not be reached right now — please try again',
    gcalNetworkError: 'Network error — check your connection and try again',
    gcalConnectSuccess: 'Google Calendar connected',
    gcalRefreshSuccess: 'Google Calendar refreshed',
    gcalDisconnected: 'Disconnected from Google Calendar',
    gcalMyCalendarsTitle: 'My Calendars',
    gcalNoCalendars: 'No calendars found on this Google account',
    gcalPrimaryLabel: 'primary',
    gcalUntitledEvent: '(Untitled Event)',
    gcalNoLocation: 'No location specified',
    gcalNoDescription: 'No description',
    gcalReadOnlyNote: 'Read-only: WorkHub can view your Google Calendar events but never creates, edits, or deletes anything on Google Calendar. Your browser connects directly to Google — no data passes through any third-party server. Google access expires after about an hour; just click Reconnect when that happens.',
    gEventDetailsReadOnlyNote: 'This event is read from your Google Calendar and cannot be edited in WorkHub.',
    gEventDetailsTitleLabel: 'Event Title',
    gEventDetailsTimeLabel: 'Date & Time',
    gEventDetailsLocationLabel: 'Location',
    gEventDetailsDescLabel: 'Description',
    gEventDetailsModalTitle: 'Google Calendar Event',
    badgeGoogleLabel: 'Google',

    // Google Sheets Integration (Phase 1 — WorkHub → Google Sheets)
    gsheetsConnectBtnLabel: 'Connect Google Sheets',
    gsheetsConnectedBtn: 'Google Sheets Connected',
    gsheetsReconnectBtn: 'Reconnect Google Sheets',
    gsheetsModalTitle: 'Connect Google Sheets',
    gsheetsModalDesc: 'Sync your Tasks, Projects, and Categories to a Google Sheet as a cloud record center. Your Apps Script Web App URL and sync key are used to send data — Google account credentials are never stored in WorkHub.',
    gsheetsStatusConnected: 'Connected',
    gsheetsStatusNotConnected: 'Not connected',
    gsheetsWebAppUrlLabel: 'Apps Script Web App URL',
    gsheetsSyncSecretLabel: 'Sync Key',
    gsheetsConnectBtnShort: 'Connect',
    gsheetsSyncNowBtn: 'Sync Now',
    gsheetsDisconnectBtn: 'Disconnect',
    gsheetsMissingConfig: 'Please enter both the Web App URL and Sync Key',
    gsheetsConnecting: 'Connecting to Google Sheets…',
    gsheetsConnected: 'Google Sheets connected',
    gsheetsConnectFailed: 'Could not connect to Google Sheets — check the Web App URL and Sync Key',
    gsheetsDisconnected: 'Disconnected from Google Sheets',
    gsheetsNotConnectedYet: 'Please connect Google Sheets first',
    gsheetsSyncRunning: 'Syncing to Google Sheets…',
    gsheetsSyncCompleted: 'Google Sheets sync completed',
    gsheetsSyncPartial: 'Google Sheets sync finished with some errors — you can retry with Sync Now',
    gsheetsSyncFailed: 'Google Sheets sync failed',
    gsheetsNetworkError: 'Google Sheets sync failed — network error, your data is safe locally',
    gsheetsPermissionError: 'Google Sheets sync failed — sync key was rejected, please reconnect',
    gsheetsApiError: 'Google Sheets sync failed — please try Sync Now again later',
    gsheetsProgressTasks: 'Tasks: {done} / {total}',
    gsheetsProgressProjects: 'Projects: {done} / {total}',
    gsheetsProgressCategories: 'Categories: {done} / {total}',
    gsheetsInitialSyncCompleted: 'Initial Sync Completed ✓',
    gsheetsLastSynced: 'Last Synced: {time}',
    gsheetsNeverSynced: 'Never synced',
    gsheetsReadNote: 'WorkHub always saves to your local workspace first. Google Sheets is a mirror — if a sync fails (offline, permission, or API error), your Tasks/Projects/Categories stay safe locally and you can click "Sync Now" any time to retry.',

    // Mobile navigation (bottom nav "More" + bottom sheet)
    moreMenuLabel: 'More',
    moreMenuLangRow: 'Switch Language (EN / 中文)',
    moreMenuRefreshRow: 'Refresh Workspace',

    // Modals
    modalTaskAddTitle: 'Add Task',
    modalTaskEditTitle: 'Edit Task',
    labelTaskTitle: 'Task Title',
    labelProject: 'Project',
    labelCategory: 'Category',
    labelPriority: 'Priority',
    labelStatus: 'Status',
    labelDueDate: 'Due Date',
    labelAssignee: 'Assignee / Owner',
    labelNotes: 'Notes / Action Details',
    btnCancel: 'Cancel',
    btnSaveTask: 'Save Task',

    modalEventAddTitle: 'Add Schedule Event',
    modalEventEditTitle: 'Edit Schedule Event',
    labelEventTitle: 'Event Title',
    labelDate: 'Date',
    labelStartTime: 'Start Time',
    labelEndTime: 'End Time',
    labelLocation: 'Location / Meeting Link',
    labelDescription: 'Agenda / Description',
    btnDeleteEvent: 'Delete Event',
    btnSaveEvent: 'Save Schedule Event',

    modalRestoreBackupTitle: 'Restore Latest Backup',
    modalRestoreBackupText: 'Newest backup available: {timestamp}\n\nRestoring this backup will replace your current workspace tasks, calendar events, language preference, sidebar preference, and KPI history.\n\nA backup of your current workspace will be automatically saved before restoring.',
    btnConfirmRestoreBackup: 'Restore Backup',

    modalStartFreshTitle: 'Start Fresh',
    modalStartFreshText: 'Are you sure you want to clear your workspace?\n\nThis will remove all tasks and calendar events from your view. A complete backup of your current workspace will be automatically saved before clearing.',
    btnConfirmStartFresh: 'Clear & Start Fresh',

    btnManageProjects: 'Manage Projects',
    btnManageCategories: 'Manage Categories',
    modalManageProjectsTitle: 'Manage Projects',
    modalManageCategoriesTitle: 'Manage Categories',
    labelNewProjectName: 'Project Name',
    labelNewProjectDesc: 'Optional Description',
    labelNewCategoryName: 'Category Name',
    labelNewCategoryDesc: 'Optional Description',
    placeholderNewProject: 'e.g. APAC Growth Project',
    placeholderNewCategory: 'e.g. Leadership Workshop',
    btnAdd: 'Add',
    btnDone: 'Done',
    statusActive: 'Active',
    statusArchived: 'Archived',
    taskCountBadge: '{count} Tasks',
    btnEdit: 'Edit',
    btnArchive: 'Archive',
    btnRestoreItem: 'Restore',
    confirmArchiveProject: 'Are you sure you want to archive project "{name}"? It will no longer appear in filters or new-task forms, but historical tasks will remain unchanged.',
    confirmArchiveCategory: 'Are you sure you want to archive category "{name}"? It will no longer appear in filters or new-task forms, but historical tasks will remain unchanged.',
    toastProjectAdded: 'Project "{name}" added',
    toastProjectRenamed: 'Project "{oldName}" renamed to "{newName}"',
    toastProjectArchived: 'Project "{name}" archived',
    toastProjectRestored: 'Project "{name}" restored to active list',
    toastCategoryAdded: 'Category "{name}" added',
    toastCategoryRenamed: 'Category "{oldName}" renamed to "{newName}"',
    toastCategoryArchived: 'Category "{name}" archived',
    toastCategoryRestored: 'Category "{name}" restored to active list',

    // Toasts
    toastDailyRefresh: 'Daily refresh completed.',
    toastBackupRestored: 'Latest backup restored successfully!',
    toastStartFreshSuccess: 'Workspace cleared. You can restore your backup anytime.',
    toastBackupCreated: 'Automatic backup saved.',
    toastTaskCreated: 'New task created',
    toastTaskUpdated: 'Task updated successfully',
    toastTaskDeleted: 'Task "{title}" deleted',
    toastStatusUpdated: 'Task status updated to {status}',
    toastEventCreated: 'New event added to schedule',
    toastEventUpdated: 'Schedule event updated successfully',
    toastEventDeleted: 'Event "{title}" deleted',
    toastFiltersReset: 'Filters reset to default',
    toastFilteredBy: 'Filtered tasks by {type}: {val}',
    toastExported: 'Workspace dataset exported to JSON file',
    toastReportDownloaded: 'People Growth Summary Report downloaded successfully',

    modalExportTitle: 'Export Workspace Data',
    modalExportDesc: 'Choose your preferred export format for Jenny\'s People Growth & Development workspace data:',
    exportExcelTitle: 'Microsoft Excel (.xlsx)',
    exportExcelSub: 'Multi-sheet workbook containing all tasks & calendar events',
    exportPDFTitle: 'PDF Executive Report (.pdf)',
    exportPDFSub: 'Printable executive summary report with tasks & schedule',
    toastExportExcelSuccess: 'Workspace data exported to Excel (.xlsx)',
    toastExportPDFSuccess: 'Executive report exported to PDF (.pdf)'
  },
  zh: {
    // Header & Greeting
    greetingMorning: '早上好，Jenny！',
    greetingAfternoon: '下午好，Jenny！',
    greetingEvening: '晚上好，Jenny！',
    searchPlaceholder: '搜索任务、会议、项目...',
    btnRefresh: '刷新',
    btnExport: '导出',
    btnRestoreLatestBackup: '恢复最新备份',
    noBackupAvailableYet: '暂无可用备份。',
    btnStartFresh: '清空工作区',
    langBtnLabel: 'EN / 中文',

    // Sidebar Navigation
    navDashboard: '仪表盘',
    navTasks: '任务管理',
    navCalendar: '日历',
    navReports: '数据报告',
    roleTitle: '员工成长与发展',

    // Dashboard Titles & KPI Cards
    dashTitle: '员工成长与发展仪表盘',
    btnAddTask: '添加新任务',
    kpiTotalTasks: '任务总计',
    kpiOpenTasks: '待办任务',
    kpiCompletedTasks: '已完成',
    kpiDueToday: '今日截止',
    kpiOverdue: '已逾期',

    // Monthly Task Summary (Dashboard)
    monthlySummaryTitle: '月度任务总结',
    mthTotalTasks: '任务总数',
    mthCompleted: '已完成',
    mthInProgress: '进行中',
    mthWaiting: '等待中',
    mthOverdue: '已逾期',
    mthCompletionRate: '完成率',
    mthOnTimeRate: '按时完成率',
    mthRemaining: '未完成',

    // KPI Daily Comparison Strings
    noComparisonYet: '暂无对比数据',
    changeNewTasks: '较昨日 {val} 个新任务',
    changeOpenTasks: '较昨日 {val} 个待办',
    changeCompleted: '较昨日 {val} 个已完成',
    changeDueToday: '较昨日 {val} 个今日截止',
    changeOverdue: '较昨日 {val} 个逾期',

    // Charts
    chartStatusTitle: '按状态统计任务',
    chartStatusSub: '7 种工作流状态',
    chartCategoryTitle: '按类别统计任务',
    chartCategorySub: 'HR, 培训, 会议, 报告, 系统, 其他',
    tooltipTaskCount: '任务数量: {count}',
    tooltipClickGuidance: '💡 点击查看符合条件的任务',
    tooltipAndMore: '...以及其他 {count} 个任务',

    // Today's Focus Cards
    focusTitle: '今日重点',
    focusSub: '互动行动矩阵',
    focusOverdue: '已逾期',
    focusDueToday: '今日截止',
    focusHighPriority: '高优先级',
    focusWaiting: '等待回音',
    emptyOverdue: '暂无逾期任务',
    emptyDueToday: '今日无截止任务',
    emptyHighPriority: '暂无紧急/高优先级任务',
    emptyWaiting: '暂无等待回音 / 待审核任务',

    // Tables & Filters
    recentTasksTitle: '近期任务（按截止日期排序）',
    recentTasksSub: '按目标完成日期早晚优先排序',
    thCheckbox: '',
    thTaskName: '任务名称',
    thTaskTitleDesc: '任务名称与备注',
    thProject: '项目',
    thCategory: '业务类别',
    thPriority: '优先级',
    thStatus: '状态',
    thDueDate: '截止日期',
    thCompletionDate: '完成日期',
    thAssignee: '负责人',
    thActions: '操作',
    tasksPageTitle: '任务管理与资源库',
    filterLabel: '筛选:',
    sortLabel: '排序:',
    allProjects: '全部项目',
    allStatuses: '全部状态',
    allPriorities: '全部优先级',
    allCategories: '全部类别',
    sortNearFirst: '截止日期 (由近至远)',
    sortFarFirst: '截止日期 (由远至近)',
    sortPriority: '优先级 (由高至低)',
    sortTitle: '标题字母顺序 (A-Z)',
    btnResetFilters: '重置筛选',
    btnPrevious: '上一页',
    btnNext: '下一页',
    taskCountShowing: '显示 {total} 个任务中的 {filtered} 个',
    emptyTable: '未找到符合当前条件的任务。',
    activeFilterText: '当前筛选: {filterDesc}',

    // Calendar
    calPageTitle: '员工成长与发展日历',
    btnAddEvent: '添加日程事件',
    viewMonth: '月',
    viewWeek: '周',
    viewDay: '日',
    btnToday: '今日',
    calTodayAgenda: '今日日程',
    calUpcomingEvents: '近期事件',
    calQuickAddTitle: '快速添加事件',
    btnQuickAddSubmit: '添加到日程',
    emptyAgenda: '今日无剩余日程事件。',
    emptyUpcoming: '暂无近期日程事件。',
    emptyDayView: '本日暂无日程安排。点击“添加日程事件”预订时间。',
    quickTitlePlaceholder: '事件主题...',

    // Reports
    reportsPageTitle: '员工成长与发展报告',
    btnDownloadSummary: '下载总结报告',
    reportBannerTitle: '人才发展数据分析系统',
    reportBannerSub: '2026年Q3员工成长与培训套件处于预览模式，一键PPT汇报导出功能即将推出。',
    btnGeneratePreliminary: '生成初步报告',

    // Reports - Live Analytics
    repOnTimeTitle: '任务按时完成率',
    repOnTimeSub: '{total} 个进行中任务中有 {count} 个按计划进行',
    repOnTimeSubNoTasks: '暂无进行中任务可供统计',
    repTrainingLoadTitle: '培训与协作工时',
    repTrainingLoadSub: '本周（{count} 个培训/会议事件）',
    repCriticalLoadTitle: '紧急与高优先级任务量',
    repCriticalLoadSub: '占任务总量的 {pct}%',
    repAlignmentTitle: '项目对齐度',
    repAlignmentSub: '{count} 个活跃项目的平均按时完成率',
    repAlignmentSubNoProjects: '暂无活跃项目',
    repWeeklyChartTitle: '任务截止日期负荷（未来6周）',
    repWeeklyChartWeekLabel: '{date} 当周',
    repAttainmentChartTitle: '项目与类别达成率',
    repAttainmentTasksLabel: '{count} 个任务',
    repAttainmentNoTasks: '暂无任务',

    // Google Calendar Integration (Phase 1 — 只读)
    gcalConnectBtnLabel: '连接 Google 日历',
    gcalConnectedBtn: 'Google 日历已连接',
    gcalDisconnectBtnLabel: '断开连接',
    gcalModalDesc: '将你的 Google 日历事件读取到 WorkHub 中（只读 —— WorkHub 不会修改你的 Google 日历）。',
    gcalStatusConnected: '已连接',
    gcalStatusNotConnected: '未连接',
    gcalConnectBtnShort: '连接',
    gcalReconnectBtn: '重新连接',
    gcalRefreshBtnLabel: '刷新 Google 日历',
    gcalSaveClientIdBtn: '保存 Client ID',
    gcalInvalidClientId: '请输入有效的 Google Client ID',
    gcalClientIdSaved: 'Client ID 已保存',
    gcalLibraryNotLoaded: 'Google 登录服务尚未加载，请检查网络连接',
    gcalFileProtocolWarning: '请使用本地网页服务器运行 WorkHub，才能连接 Google 日历。',
    gcalAuthFailed: 'Google 授权失败，请重试',
    gcalAuthDenied: 'Google 日历访问被拒绝 —— WorkHub 需要日历读取权限才能显示你的日程',
    gcalPopupClosed: 'Google 登录窗口在完成前被关闭',
    gcalPopupBlocked: '浏览器阻止了 Google 登录弹窗，请允许此网站弹出窗口',
    gcalNotConnectedYet: '请先连接 Google 日历',
    gcalTokenExpired: 'Google 日历登录已过期，请重新连接',
    gcalApiError: '暂时无法连接 Google 日历，请重试',
    gcalNetworkError: '网络错误，请检查网络连接后重试',
    gcalConnectSuccess: 'Google 日历已连接',
    gcalRefreshSuccess: 'Google 日历已刷新',
    gcalDisconnected: '已断开 Google 日历连接',
    gcalMyCalendarsTitle: '我的日历',
    gcalNoCalendars: '此 Google 账户未找到任何日历',
    gcalPrimaryLabel: '主日历',
    gcalUntitledEvent: '（无标题事件）',
    gcalNoLocation: '未指定地点',
    gcalNoDescription: '无描述',
    gcalReadOnlyNote: '只读模式：WorkHub 可以查看你的 Google 日历事件，但绝不会在 Google 日历上创建、编辑或删除任何内容。你的浏览器直接连接 Google，数据不经过任何第三方服务器。Google 授权大约一小时后过期，届时点击"重新连接"即可。',
    gEventDetailsReadOnlyNote: '此事件来自你的 Google 日历，无法在 WorkHub 中编辑。',
    gEventDetailsTitleLabel: '事件标题',
    gEventDetailsTimeLabel: '日期与时间',
    gEventDetailsLocationLabel: '地点',
    gEventDetailsDescLabel: '描述',
    gEventDetailsModalTitle: 'Google 日历事件',
    badgeGoogleLabel: 'Google',

    // Google Sheets Integration (Phase 1 — WorkHub → Google Sheets)
    gsheetsConnectBtnLabel: '连接 Google 表格',
    gsheetsConnectedBtn: 'Google 表格已连接',
    gsheetsReconnectBtn: '重新连接 Google 表格',
    gsheetsModalTitle: '连接 Google 表格',
    gsheetsModalDesc: '把你的 Tasks、Projects、Categories 同步到 Google 表格，作为云端记录中心。这里使用的是 Apps Script Web App 网址和同步密钥来传送数据——不会储存任何 Google 账号密码或 Client Secret。',
    gsheetsStatusConnected: '已连接',
    gsheetsStatusNotConnected: '尚未连接',
    gsheetsWebAppUrlLabel: 'Apps Script Web App 网址',
    gsheetsSyncSecretLabel: '同步密钥',
    gsheetsConnectBtnShort: '连接',
    gsheetsSyncNowBtn: '立即同步',
    gsheetsDisconnectBtn: '断开连接',
    gsheetsMissingConfig: '请输入 Web App 网址和同步密钥',
    gsheetsConnecting: '正在连接 Google 表格…',
    gsheetsConnected: 'Google 表格已连接',
    gsheetsConnectFailed: '无法连接 Google 表格——请检查 Web App 网址和同步密钥',
    gsheetsDisconnected: '已断开 Google 表格连接',
    gsheetsNotConnectedYet: '请先连接 Google 表格',
    gsheetsSyncRunning: '正在同步到 Google 表格…',
    gsheetsSyncCompleted: 'Google 表格同步完成',
    gsheetsSyncPartial: 'Google 表格同步完成，但部分记录失败——可以点击"立即同步"重试',
    gsheetsSyncFailed: 'Google 表格同步失败',
    gsheetsNetworkError: 'Google 表格同步失败——网络错误，本地数据仍然安全',
    gsheetsPermissionError: 'Google 表格同步失败——同步密钥被拒绝，请重新连接',
    gsheetsApiError: 'Google 表格同步失败——请稍后再点击"立即同步"',
    gsheetsProgressTasks: 'Tasks: {done} / {total}',
    gsheetsProgressProjects: 'Projects: {done} / {total}',
    gsheetsProgressCategories: 'Categories: {done} / {total}',
    gsheetsInitialSyncCompleted: '首次同步完成 ✓',
    gsheetsLastSynced: '上次同步时间：{time}',
    gsheetsNeverSynced: '尚未同步过',
    gsheetsReadNote: 'WorkHub 一律先保存到本地工作区。Google 表格只是一个镜像——如果同步失败（离线、权限问题、或 API 错误），你的 Tasks / Projects / Categories 仍然安全保存在本地，随时可以点击"立即同步"重试。',

    // Mobile navigation (bottom nav "More" + bottom sheet)
    moreMenuLabel: '更多',
    moreMenuLangRow: '切换语言 (EN / 中文)',
    moreMenuRefreshRow: '刷新工作区',

    // Modals
    modalTaskAddTitle: '添加新任务',
    modalTaskEditTitle: '编辑任务',
    labelTaskTitle: '任务标题',
    labelProject: '所属项目',
    labelCategory: '业务类别',
    labelPriority: '优先级',
    labelStatus: '任务状态',
    labelDueDate: '截止日期',
    labelAssignee: '负责人 / 所有人',
    labelNotes: '备注 / 详细行动计划',
    btnCancel: '取消',
    btnSaveTask: '保存任务',

    modalEventAddTitle: '添加日程事件',
    modalEventEditTitle: '编辑日程事件',
    labelEventTitle: '事件名称',
    labelDate: '日期',
    labelStartTime: '开始时间',
    labelEndTime: '结束时间',
    labelLocation: '地点 / 会议链接',
    labelDescription: '会议议程 / 描述',
    btnDeleteEvent: '删除事件',
    btnSaveEvent: '保存日程事件',

    modalRestoreBackupTitle: '恢复最新备份',
    modalRestoreBackupText: '最新可用备份时间: {timestamp}\n\n恢复此备份将替换您当前的所有任务、日历事件、语言设置、侧边栏设置及 KPI 历史数据。\n\n在恢复前，系统会自动保存一份当前工作区的本地备份。',
    btnConfirmRestoreBackup: '确认恢复',

    modalStartFreshTitle: '清空工作区',
    modalStartFreshText: '确定要清空当前工作区吗？\n\n这将清空所有的任务和日历日程。在清空前，系统会自动为您当前的完整工作区保存一份本地备份。',
    btnConfirmStartFresh: '清空并开始新工作区',

    btnManageProjects: '管理项目',
    btnManageCategories: '管理业务类别',
    modalManageProjectsTitle: '管理项目',
    modalManageCategoriesTitle: '管理业务类别',
    labelNewProjectName: '项目名称',
    labelNewProjectDesc: '可选描述',
    labelNewCategoryName: '业务类别名称',
    labelNewCategoryDesc: '可选描述',
    placeholderNewProject: '例如：亚太增长项目',
    placeholderNewCategory: '例如：领导力工作坊',
    btnAdd: '添加',
    btnDone: '完成',
    statusActive: '启用中',
    statusArchived: '已归档',
    taskCountBadge: '{count} 个任务',
    btnEdit: '编辑',
    btnArchive: '归档',
    btnRestoreItem: '恢复',
    confirmArchiveProject: '确定要归档项目 “{name}” 吗？归档后将不再显示于新建任务或筛选器中，但历史任务将保留原信息不变。',
    confirmArchiveCategory: '确定要归档类别 “{name}” 吗？归档后将不再显示于新建任务或筛选器中，但历史任务将保留原信息不变。',
    toastProjectAdded: '项目 “{name}” 已添加',
    toastProjectRenamed: '项目 “{oldName}” 已重命名为 “{newName}”',
    toastProjectArchived: '项目 “{name}” 已归档',
    toastProjectRestored: '项目 “{name}” 已恢复',
    toastCategoryAdded: '类别 “{name}” 已添加',
    toastCategoryRenamed: '类别 “{oldName}” 已重命名为 “{newName}”',
    toastCategoryArchived: '类别 “{name}” 已归档',
    toastCategoryRestored: '类别 “{name}” 已恢复',

    // Toasts
    toastDailyRefresh: '每日刷新已完成。',
    toastBackupRestored: '最新备份已成功恢复！',
    toastStartFreshSuccess: '工作区已清空。您可以随时通过恢复最新备份还原。',
    toastBackupCreated: '已保存自动备份。',
    toastTaskCreated: '新任务已创建',
    toastTaskUpdated: '任务更新成功',
    toastTaskDeleted: '任务 "{title}" 已删除',
    toastStatusUpdated: '任务状态已更新至 {status}',
    toastEventCreated: '新事件已添加到日程',
    toastEventUpdated: '日程事件更新成功',
    toastEventDeleted: '事件 "{title}" 已删除',
    toastFiltersReset: '筛选已重置为默认',
    toastFilteredBy: '已按 {type} 筛选任务: {val}',
    toastExported: '资源库数据已导出至 JSON 文件',
    toastReportDownloaded: '员工成长总结报告下载成功',

    modalExportTitle: '导出工作区数据',
    modalExportDesc: '请选择 Jenny 员工成长与发展资源库的导出格式：',
    exportExcelTitle: 'Microsoft Excel 表格 (.xlsx)',
    exportExcelSub: '包含所有任务及日历事件的多工作表 Excel 文件',
    exportPDFTitle: 'PDF 总结报告 (.pdf)',
    exportPDFSub: '包含关键指标、任务库和日历日程的可打印 PDF 报告',
    toastExportExcelSuccess: '工作区数据已成功导出为 Excel (.xlsx) 文件',
    toastExportPDFSuccess: '总结报告已成功导出为 PDF (.pdf) 文件'
  }
};

// ==========================================================================
// DEFAULT JENNY DEMO DATASET (PEOPLE GROWTH & DEVELOPMENT)
// ==========================================================================
const DEFAULT_TASKS = [
  {
    id: 'task-1',
    title: '动态领导力 - 人人都需要领导力',
    category: 'Training',
    project: 'SG Project',
    priority: 'High',
    status: 'In Progress',
    dueDate: '2026-07-29',
    assignee: 'Jenny',
    notes: 'Prepare workshop slides and attendee exercises for leadership module.'
  },
  {
    id: 'task-2',
    title: '3个部门考核统计表',
    category: 'HR',
    project: 'CN Project',
    priority: 'Critical',
    status: 'Review',
    dueDate: '2026-07-29',
    assignee: 'Jenny',
    notes: 'Review quarterly performance assessment tables across 3 departments.'
  },
  {
    id: 'task-3',
    title: '楼面服务流程 - 收银 (一)',
    category: 'Training',
    project: 'PP Project',
    priority: 'High',
    status: 'Waiting',
    dueDate: '2026-07-30',
    assignee: 'Jenny',
    notes: 'Waiting for operations team feedback on cashier service SOP draft.'
  },
  {
    id: 'task-4',
    title: 'Performance Improvement Plan form template',
    category: 'HR',
    project: 'SG Project',
    priority: 'Medium',
    status: 'Completed',
    dueDate: '2026-07-28',
    assignee: 'Jenny',
    notes: 'Standardized PIP form template uploaded to HR intranet.'
  },
  {
    id: 'task-5',
    title: 'Audit System testing',
    category: 'System',
    project: 'SG Project',
    priority: 'Critical',
    status: 'In Progress',
    dueDate: '2026-07-29',
    assignee: 'Jenny',
    notes: 'Perform UAT testing on new HR audit compliance workflows.'
  },
  {
    id: 'task-6',
    title: 'SG Project progress review',
    category: 'Meeting',
    project: 'SG Project',
    priority: 'High',
    status: 'Not Started',
    dueDate: '2026-07-30',
    assignee: 'Jenny',
    notes: 'Prepare agenda and milestone trackers for SG project sync.'
  },
  {
    id: 'task-7',
    title: 'CN Project meeting preparation',
    category: 'Meeting',
    project: 'CN Project',
    priority: 'Medium',
    status: 'In Progress',
    dueDate: '2026-07-31',
    assignee: 'Jenny',
    notes: 'Gather cross-department training feedback for CN project leadership.'
  },
  {
    id: 'task-8',
    title: 'Update SOP',
    category: 'HR',
    project: 'PP Project',
    priority: 'Low',
    status: 'On Hold',
    dueDate: '2026-08-04',
    assignee: 'Jenny',
    notes: 'Pending management approval on revised employee onboarding guidelines.'
  },
  {
    id: 'task-9',
    title: 'Submit monthly report',
    category: 'Report',
    project: 'SG Project',
    priority: 'High',
    status: 'Not Started',
    dueDate: '2026-07-31',
    assignee: 'Jenny',
    notes: 'Compile July People Growth & Development training metrics and hours.'
  },
  {
    id: 'task-10',
    title: 'Upload PMS training material',
    category: 'System',
    project: 'CN Project',
    priority: 'Medium',
    status: 'Completed',
    dueDate: '2026-07-27',
    assignee: 'Jenny',
    notes: 'Performance Management System video tutorials and PDFs published.'
  },
  {
    id: 'task-11',
    title: 'People Growth Q3 Workshop Deck',
    category: 'Training',
    project: 'SG Project',
    priority: 'Critical',
    status: 'Review',
    dueDate: '2026-07-29',
    assignee: 'Jenny',
    notes: 'Final review of Q3 talent development workshop presentation.'
  },
  {
    id: 'task-12',
    title: 'PP Project Annual Talent Review Schedule',
    category: 'HR',
    project: 'PP Project',
    priority: 'High',
    status: 'Not Started',
    dueDate: '2026-08-05',
    assignee: 'Jenny',
    notes: 'Coordinate calendar slots with department leads for annual reviews.'
  },
  {
    id: 'task-13',
    title: 'Employee Feedback Survey Results Summary',
    category: 'Report',
    project: 'CN Project',
    priority: 'Medium',
    status: 'Cancelled',
    dueDate: '2026-07-26',
    assignee: 'Jenny',
    notes: 'Survey merged into quarterly all-hands pulse check.'
  },
  {
    id: 'task-14',
    title: 'Leadership Coaching Vendor Selection',
    category: 'Others',
    project: 'SG Project',
    priority: 'Low',
    status: 'On Hold',
    dueDate: '2026-08-06',
    assignee: 'Jenny',
    notes: 'Awaiting procurement vendor shortlist comparison.'
  }
];

// ==========================================================================
// ONE-TIME TASK MIGRATION — Old WorkHub -> current WorkHub (batch 20260828-01)
// ==========================================================================
// Runs at most once per browser, guarded by MIGRATION_FLAG_KEY. It merges the
// real task history exported from the old WorkHub ("Arena Project") into
// whatever is already in THIS browser's Tasks — it never wipes, replaces, or
// silently overwrites anything:
//   - MIGRATION_INSERTS are added only if their Task ID doesn't already exist
//     here, keeping the old app's own Task ID (already unique — old IDs are
//     Date.now()-based and never collide with the live task-1..task-14
//     range), so re-running this can never create a duplicate.
//   - MIGRATION_UPDATES correct 3 specific existing live tasks IN PLACE (same
//     Task ID kept on purpose) — these were confirmed, with the user, to be
//     the same real task as an existing placeholder task whose live fields
//     were stale/inaccurate; the old data is authoritative for these 3 only.
// Every value below came from a one-time analysis of both apps' actual
// exported task data (Export Data -> Excel from each), confirmed with the
// user (including how to handle 3 title collisions and 1 internal duplicate
// in the old data) before this code was written — see the migration plan.
const MIGRATION_BATCH_ID = '20260828-MIGRATION-01';
const MIGRATION_FLAG_KEY = 'workhub_migration_20260828_applied';

const MIGRATION_UPDATES = [
  { id: 'task-1', title: '动态领导力 - 人人都需要领导力', project: 'SG Project', category: 'Training', priority: 'High', status: 'Completed', dueDate: '2026-07-31', assignee: 'Jenny', notes: "Pending Ted's review." },
  { id: 'task-3', title: '楼面服务流程 - 收银 (一)', project: 'SG Project', category: 'Training', priority: 'Medium', status: 'Completed', dueDate: '2026-08-31', assignee: 'Jenny', notes: '' },
  { id: 'task-4', title: 'Performance Improvement Plan form template', project: 'SG Project', category: 'Training', priority: 'High', status: 'Completed', dueDate: '2026-08-04', assignee: 'Jenny', notes: '' }
];

// 12 tasks that only exist in the old data (the old app's 16th task, the
// newer of two "DXEPP Assessment Summary Report" duplicates, was excluded
// per the user's choice to keep only the older Aug 14 entry below).
const MIGRATION_INSERTS = [
  { id: 'task-1787189615724', title: 'Audit Module Meeting', project: 'SG Project', category: 'Meeting', priority: 'High', status: 'Completed', dueDate: '2026-08-19', assignee: 'Jenny', notes: 'Discuss dashboard and audit workflow & UI.' },
  { id: 'task-1787189526094', title: 'Audit Module System', project: 'SG Project', category: 'System', priority: 'High', status: 'In Progress', dueDate: '2026-09-30', assignee: 'Jenny', notes: 'Use Arena.Ai to create.' },
  { id: 'task-1786669098671', title: 'DXEPP Assessment Summary Report', project: 'PP Project', category: 'Report', priority: 'Critical', status: 'Completed', dueDate: '2026-08-14', assignee: 'Jenny', notes: '' },
  { id: 'task-1785745831688', title: 'Ops Meeting Minutes - Consolidation', project: 'SG Project', category: 'Report', priority: 'High', status: 'Completed', dueDate: '2026-08-03', assignee: 'Jenny', notes: "Assist Ted in consolidating all department's updates." },
  { id: 'task-1785315574517', title: '分行突发事故应对与紧急处理 - 网络', project: 'SG Project', category: 'Training', priority: 'Medium', status: 'In Progress', dueDate: '2026-09-30', assignee: 'Jenny', notes: '' },
  { id: 'task-1785315481989', title: 'Claude AI Dashboard creation', project: 'SG Project', category: 'System', priority: 'High', status: 'Completed', dueDate: '2026-08-07', assignee: 'Jenny', notes: '' },
  { id: 'task-1785315429882', title: 'Arena Dashboard creation', project: 'SG Project', category: 'System', priority: 'High', status: 'Completed', dueDate: '2026-07-29', assignee: 'Jenny', notes: '' },
  { id: 'task-1785315330697', title: 'Lean Sigma PPT', project: 'SG Project', category: 'Others', priority: 'Low', status: 'In Progress', dueDate: '2026-09-30', assignee: 'Jenny', notes: 'Assist Hayley.' },
  { id: 'task-1785315280230', title: 'Audit Module Meeting Minutes', project: 'SG Project', category: 'System', priority: 'High', status: 'Completed', dueDate: '2026-07-30', assignee: 'Jenny', notes: 'Discussion with Ted on 30/7/2026.' },
  { id: 'task-1785315243744', title: 'DXEPP 3个部门考核表', project: 'PP Project', category: 'Report', priority: 'High', status: 'Completed', dueDate: '2026-07-31', assignee: 'Jenny', notes: "Pending Ted's review." },
  { id: 'task-1785315208863', title: '项目奖金提成表', project: 'CN Project', category: 'Others', priority: 'High', status: 'Completed', dueDate: '2026-08-05', assignee: 'Jenny', notes: 'Guide and handover to Yi Ping.' },
  { id: 'task-1785315139160', title: 'DXESG 3个部门考核统计表', project: 'SG Project', category: 'Report', priority: 'Low', status: 'Completed', dueDate: '2026-08-07', assignee: 'Jenny', notes: '' }
];

// Applies MIGRATION_UPDATES / MIGRATION_INSERTS exactly once per browser.
// Idempotent by construction (every operation is itself an upsert-by-ID), so
// even if MIGRATION_FLAG_KEY were ever cleared, re-running this can never
// duplicate a row or lose data.
function runOneTimeTaskMigration() {
  if (localStorage.getItem(MIGRATION_FLAG_KEY)) return; // already applied on this browser

  // Phase 7 data safety: snapshot the pre-migration state using the existing
  // backup system (Restore Latest Backup) before touching anything, so this
  // migration is reversible without adding a second backup mechanism.
  createAutomaticBackup('pre-migration-' + MIGRATION_BATCH_ID);

  let updated = 0, inserted = 0;
  const touchedIds = [];

  MIGRATION_UPDATES.forEach(rec => {
    const idx = appState.tasks.findIndex(t => t.id === rec.id);
    if (idx !== -1) {
      appState.tasks[idx] = { ...appState.tasks[idx], ...rec };
      updated++;
    } else {
      // Target task no longer exists here (e.g. already deleted) — insert
      // instead of silently discarding the old, correct data.
      appState.tasks.unshift({ ...rec });
      inserted++;
    }
    touchedIds.push(rec.id);
  });

  MIGRATION_INSERTS.forEach(rec => {
    if (!appState.tasks.some(t => t.id === rec.id)) {
      appState.tasks.push({ ...rec });
      inserted++;
      touchedIds.push(rec.id);
    }
  });

  saveTasksToStorage();

  // Migration log (Phase 7) — kept separate from Task data itself so the
  // existing Task shape / UI / Google Sheets column mapping never changes.
  let log = [];
  try { log = JSON.parse(localStorage.getItem('workhub_migration_log') || '[]'); } catch (e) { log = []; }
  log.push({
    batchId: MIGRATION_BATCH_ID,
    appliedAt: new Date().toISOString(),
    source: 'OLD_WORKHUB',
    updatedTaskIds: MIGRATION_UPDATES.map(r => r.id),
    insertedTaskIds: MIGRATION_INSERTS.map(r => r.id)
  });
  localStorage.setItem('workhub_migration_log', JSON.stringify(log));
  localStorage.setItem(MIGRATION_FLAG_KEY, 'true');

  // No explicit Sheets sync call here on purpose: this function runs (see
  // DOMContentLoaded) BEFORE initGoogleSheetsIntegration(), whose own
  // startup auto-sync (added earlier in this project) uploads every current
  // Task — migrated ones included — moments later through the existing
  // upsert path, with no separate sync system and no double-syncing.

  if (updated + inserted > 0) {
    showToast(
      appState.lang === 'zh'
        ? `已从旧版 WorkHub 迁移 ${inserted} 个新任务，更新 ${updated} 个任务`
        : `Migrated ${inserted} new task(s) and updated ${updated} task(s) from your old WorkHub`,
      'success'
    );
    refreshAllViews();
  }
}

const DEFAULT_EVENTS = [
  {
    id: 'evt-1',
    title: 'SG Project Progress Review Sync',
    date: '2026-07-29',
    startTime: '09:30',
    endTime: '10:30',
    category: 'Meeting',
    location: 'Meeting Room 3 / Teams',
    description: 'Bi-weekly project milestone review with SG stakeholders.'
  },
  {
    id: 'evt-2',
    title: '3个部门考核统计表 Review Meeting',
    date: '2026-07-29',
    startTime: '11:00',
    endTime: '12:00',
    category: 'HR',
    location: 'HR Conference Suite',
    description: 'Walkthrough of departmental performance assessment numbers.'
  },
  {
    id: 'evt-3',
    title: '动态领导力 Training Workshop (Session 1)',
    date: '2026-07-29',
    startTime: '14:00',
    endTime: '15:30',
    category: 'Training',
    location: 'Training Hall A',
    description: 'Interactive leadership coaching module for team leaders.'
  },
  {
    id: 'evt-4',
    title: 'PP Project HR Audit System Walkthrough',
    date: '2026-07-29',
    startTime: '16:30',
    endTime: '17:30',
    category: 'System',
    location: 'Zoom Virtual Room',
    description: 'UAT feedback and system compliance check.'
  },
  {
    id: 'evt-5',
    title: 'CN Project Training Preparation Meeting',
    date: '2026-07-30',
    startTime: '10:00',
    endTime: '11:30',
    category: 'Meeting',
    location: 'Meeting Room 2',
    description: 'Align on Q3 training rollout schedule for CN regional offices.'
  },
  {
    id: 'evt-6',
    title: '楼面服务流程 - 收银 (一) Course Design Check',
    date: '2026-07-30',
    startTime: '14:00',
    endTime: '15:00',
    category: 'Training',
    location: 'Suite 401',
    description: 'Review cashier service training materials and practical exercises.'
  },
  {
    id: 'evt-7',
    title: 'People Growth Q3 Workshop Briefing',
    date: '2026-07-31',
    startTime: '11:00',
    endTime: '12:00',
    category: 'Training',
    location: 'Virtual Studio',
    description: 'Facilitator briefing session before upcoming Q3 training series.'
  },
  {
    id: 'evt-8',
    title: 'Monthly Report Review with Department Heads',
    date: '2026-08-03',
    startTime: '09:00',
    endTime: '10:30',
    category: 'Report',
    location: 'Executive Boardroom',
    description: 'Review July training hours and talent development progress.'
  },
  {
    id: 'evt-9',
    title: 'Performance Improvement Plan Alignment',
    date: '2026-07-28',
    startTime: '13:00',
    endTime: '14:30',
    category: 'HR',
    location: 'HR Suite',
    description: 'Alignment with HR business partners on PIP template rollout.'
  },
  {
    id: 'evt-10',
    title: 'PMS System Training Material Readout',
    date: '2026-07-24',
    startTime: '14:00',
    endTime: '15:00',
    category: 'System',
    location: 'Tech Lab',
    description: 'Demo of updated video tutorials for Performance Management System.'
  }
];

// Seeded sample prior-day (2026-07-27) KPI snapshot so Jenny sees realistic change examples
const DEFAULT_PRIOR_DAY_SNAPSHOT = {
  total: 9,
  open: 8,
  completed: 1,
  dueToday: 4,
  overdue: 2
};

const DEFAULT_PROJECTS = [
  { id: 'proj-sg', name: 'SG Project', description: 'Singapore regional talent & training initiatives', active: true },
  { id: 'proj-cn', name: 'CN Project', description: 'China regional training & HR development', active: true },
  { id: 'proj-pp', name: 'PP Project', description: 'People Partner core operational projects', active: true }
];

const DEFAULT_CATEGORIES = [
  { id: 'cat-hr', name: 'HR', description: 'Human Resources compliance & reviews', active: true },
  { id: 'cat-training', name: 'Training', description: 'People Growth & leadership workshops', active: true },
  { id: 'cat-meeting', name: 'Meeting', description: 'Internal & stakeholder syncs', active: true },
  { id: 'cat-report', name: 'Report', description: 'Monthly & quarterly analytics reporting', active: true },
  { id: 'cat-system', name: 'System', description: 'Intranet, PMS & training system management', active: true },
  { id: 'cat-others', name: 'Others', description: 'General & ad-hoc administrative tasks', active: true }
];

// ==========================================================================
// APPLICATION STATE & STORAGE MANAGERS
// ==========================================================================
let appState = {
  lang: 'en', // Default language is English
  tasks: [],
  events: [],
  projects: [],
  categories: [],
  currentTab: 'dashboard',
  calendarView: 'month', // 'month' | 'week' | 'day'
  selectedCalDate: getTodaySGTStr(),
  currentMonthDate: getTodayMonthStart(),
  filters: {
    dashboardProject: 'ALL',
    search: '',
    project: 'ALL',
    status: 'ALL',
    priority: 'ALL',
    category: 'ALL',
    sortBy: 'dueDateAsc',
    // Task Management month-tab filter (by Due Date). Always defaults to the
    // CURRENT calendar month, computed fresh from getTodaySGTStr() at load
    // time — never persisted/hardcoded, so a future month becomes the
    // default automatically the next time the app loads that month.
    taskMonth: getTodaySGTStr().slice(0, 7),
    // Dashboard's "Monthly Task Summary" month selector — independent of the
    // Task Management tab above (separate page), same auto-current-month
    // default logic.
    dashboardMonth: getTodaySGTStr().slice(0, 7)
  },
  // Task Management pagination — resets to page 1 whenever the month tab,
  // any filter, sort order, or search changes. Never persisted (always
  // starts fresh on load).
  taskManagementPage: 1,
  chartInstances: {
    statusChart: null,
    categoryChart: null,
    reportsWeeklyChart: null,
    monthlyCompletionChart: null
  },
  google: {
    clientId: null,
    accessToken: null,
    tokenExpiryMs: null,
    tokenClient: null,
    calendars: [],            // [{id, summary, primary, backgroundColor}] from calendarList.list
    selectedCalendarIds: [],  // which calendars are checked in "My Calendars"
    events: [],               // in-memory ONLY Google events for the currently-visible date range
                               // (never written to localStorage / WorkHub tasks or events)
    lastFetchKey: null,       // cache key so navigating back to an already-loaded range doesn't refetch
    loading: false,
    isFileProtocol: false,
    everConnected: false,      // remembered boolean only (NOT the token) — did the user ever complete Connect?
    autoConnectInProgress: false, // true while a silent (no-popup) reconnect attempt is in flight
    expiryRetryFailureCallback: null // set while a mid-session silent-retry (after a 401) is in flight
  },
  // Google Sheets Integration (Phase 1 — WorkHub -> Google Sheets, via a
  // Google Apps Script Web App the user deploys in their own Google account).
  // No Google OAuth token and no Google Client Secret are ever involved here —
  // only a user-generated "sync key" for their own script, see initGoogleSheetsIntegration().
  googleSheets: {
    webAppUrl: null,
    syncSecret: null,
    lastSyncedMs: null,
    syncing: false
  }
};

// Helper translation function
function t(key, params = {}) {
  const dict = I18N[appState.lang] || I18N.en;
  let text = dict[key] || I18N.en[key] || key;
  Object.keys(params).forEach(k => {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
  });
  return text;
}

// Initialize or Load from Local Storage with Automatic Migration to Jenny's Dataset
function initStorage() {
  const savedLang = localStorage.getItem('workhub_lang');
  if (savedLang === 'en' || savedLang === 'zh') {
    appState.lang = savedLang;
  } else {
    appState.lang = 'en';
  }

  const isMigrated = localStorage.getItem('workhub_jenny_migrated_v8');
  const savedTasks = localStorage.getItem('workhub_tasks');
  const savedEvents = localStorage.getItem('workhub_events');
  const savedProjects = localStorage.getItem('workhub_projects');
  const savedCategories = localStorage.getItem('workhub_categories');

  if (!isMigrated) {
    appState.tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
    appState.events = JSON.parse(JSON.stringify(DEFAULT_EVENTS));
    appState.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
    appState.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
    saveTasksToStorage();
    saveEventsToStorage();
    saveProjectsToStorage();
    saveCategoriesToStorage();
    // Seed prior-day KPI snapshot for realistic comparison
    seedPriorDaySnapshot();
    localStorage.setItem('workhub_jenny_migrated_v8', 'true');
  } else {
    if (savedProjects) {
      try { appState.projects = JSON.parse(savedProjects); } catch(e) { appState.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS)); }
    } else {
      appState.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
      saveProjectsToStorage();
    }

    if (savedCategories) {
      try { appState.categories = JSON.parse(savedCategories); } catch(e) { appState.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)); }
    } else {
      appState.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
      saveCategoriesToStorage();
    }

    if (savedTasks) {
      try {
        appState.tasks = JSON.parse(savedTasks);
      } catch (e) {
        appState.tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
      }
    } else {
      appState.tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
      saveTasksToStorage();
    }

    if (savedEvents) {
      try {
        appState.events = JSON.parse(savedEvents);
      } catch (e) {
        appState.events = JSON.parse(JSON.stringify(DEFAULT_EVENTS));
      }
    } else {
      appState.events = JSON.parse(JSON.stringify(DEFAULT_EVENTS));
      saveEventsToStorage();
    }
  }

  // Default Client ID pre-provisioned for Jenny's WorkHub Local OAuth client
  // (Google Cloud project "My First Project", authorized origin http://localhost:8000)
  const DEFAULT_GOOGLE_CLIENT_ID = '1026325231177-vn1hlilb7jonr8l36a6iaefsr608cfre.apps.googleusercontent.com';

  const savedGoogleClientId = localStorage.getItem('workhub_google_client_id');
  if (savedGoogleClientId) {
    appState.google.clientId = savedGoogleClientId;
  } else {
    appState.google.clientId = DEFAULT_GOOGLE_CLIENT_ID;
    localStorage.setItem('workhub_google_client_id', DEFAULT_GOOGLE_CLIENT_ID);
  }

  // Remembered boolean flag only — never the access token or client secret — so
  // WorkHub knows whether it's worth attempting a silent reconnect on startup.
  appState.google.everConnected = (localStorage.getItem('workhub_google_ever_connected') === 'true');

  // Google Sheets connection config. This is a user-generated Web App URL + sync
  // key for the user's OWN Apps Script — never a Google OAuth token or Google
  // Client Secret — see the Google Sheets Integration block below for details.
  appState.googleSheets.webAppUrl = localStorage.getItem('workhub_gsheets_webapp_url') || null;
  appState.googleSheets.syncSecret = localStorage.getItem('workhub_gsheets_sync_secret') || null;
  const savedLastSynced = localStorage.getItem('workhub_gsheets_last_synced');
  appState.googleSheets.lastSyncedMs = savedLastSynced ? Number(savedLastSynced) : null;
}

function saveProjectsToStorage() {
  localStorage.setItem('workhub_projects', JSON.stringify(appState.projects));
  if (!isRestoringOrClearing) {
    createAutomaticBackup('projects-changed');
  }
}

function saveCategoriesToStorage() {
  localStorage.setItem('workhub_categories', JSON.stringify(appState.categories));
  if (!isRestoringOrClearing) {
    createAutomaticBackup('categories-changed');
  }
}

function seedPriorDaySnapshot() {
  let history = {};
  const savedHistory = localStorage.getItem('workhub_kpi_history');
  if (savedHistory) {
    try {
      history = JSON.parse(savedHistory);
    } catch (e) {
      history = {};
    }
  }
  history[getYesterdaySGTStr()] = DEFAULT_PRIOR_DAY_SNAPSHOT;
  localStorage.setItem('workhub_kpi_history', JSON.stringify(history));
}

let isRestoringOrClearing = false;

function saveTasksToStorage() {
  localStorage.setItem('workhub_tasks', JSON.stringify(appState.tasks));
  if (!isRestoringOrClearing) {
    createAutomaticBackup('tasks-changed');
  }
}

function saveEventsToStorage() {
  localStorage.setItem('workhub_events', JSON.stringify(appState.events));
  if (!isRestoringOrClearing) {
    createAutomaticBackup('events-changed');
  }
}

// ==========================================================================
// AUTOMATIC BACKUP, RESTORE LATEST BACKUP & START FRESH SYSTEM
// ==========================================================================
function getBackupsList() {
  const saved = localStorage.getItem('workhub_backups_list');
  if (!saved) return [];
  try {
    const list = JSON.parse(saved);
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function createAutomaticBackup(reason = 'auto') {
  let backups = getBackupsList();
  const backupObj = {
    id: 'bkp-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
    timestamp: new Date().toISOString(),
    reason: reason,
    tasks: JSON.parse(JSON.stringify(appState.tasks)),
    events: JSON.parse(JSON.stringify(appState.events)),
    projects: JSON.parse(JSON.stringify(appState.projects)),
    categories: JSON.parse(JSON.stringify(appState.categories)),
    lang: appState.lang,
    sidebarCollapsed: localStorage.getItem('workhub_sidebar_collapsed') || 'false',
    kpiHistory: localStorage.getItem('workhub_kpi_history') || '{}'
  };

  backups.push(backupObj);
  while (backups.length > 30) {
    backups.shift(); // Keep latest 30 backups, removing oldest first
  }

  localStorage.setItem('workhub_backups_list', JSON.stringify(backups));
  updateBackupButtonsState();
}

function updateBackupButtonsState() {
  const backups = getBackupsList();
  const restoreBtn = document.getElementById('restoreLatestBackupBtn');
  const restoreSpan = document.getElementById('restoreBackupBtnText');
  if (!restoreBtn || !restoreSpan) return;

  if (backups.length === 0) {
    restoreBtn.disabled = true;
    restoreBtn.style.opacity = '0.55';
    restoreBtn.style.cursor = 'not-allowed';
    restoreSpan.textContent = t('noBackupAvailableYet');
    restoreBtn.title = t('noBackupAvailableYet');
  } else {
    restoreBtn.disabled = false;
    restoreBtn.style.opacity = '1';
    restoreBtn.style.cursor = 'pointer';
    restoreSpan.textContent = t('btnRestoreLatestBackup');
    const latest = backups[backups.length - 1];
    const fmt = new Date(latest.timestamp).toLocaleString(appState.lang === 'zh' ? 'zh-CN' : 'en-SG', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    restoreBtn.title = `${t('btnRestoreLatestBackup')} (${fmt})`;
  }

  const startFreshSpan = document.getElementById('startFreshBtnText');
  if (startFreshSpan) {
    startFreshSpan.textContent = t('btnStartFresh');
  }
}

function executeRestoreLatestBackup() {
  const backups = getBackupsList();
  if (backups.length === 0) {
    showToast(t('noBackupAvailableYet'), 'alert');
    return;
  }

  // Target backup is the newest available
  const targetBackup = backups[backups.length - 1];

  // Automatically back up current workspace before restoring
  createAutomaticBackup('before-restore');

  isRestoringOrClearing = true;

  // Restore tasks, events, settings, and KPI history
  if (Array.isArray(targetBackup.tasks)) {
    appState.tasks = JSON.parse(JSON.stringify(targetBackup.tasks));
    localStorage.setItem('workhub_tasks', JSON.stringify(appState.tasks));
  }
  if (Array.isArray(targetBackup.events)) {
    appState.events = JSON.parse(JSON.stringify(targetBackup.events));
    localStorage.setItem('workhub_events', JSON.stringify(appState.events));
  }
  if (Array.isArray(targetBackup.projects)) {
    appState.projects = JSON.parse(JSON.stringify(targetBackup.projects));
    localStorage.setItem('workhub_projects', JSON.stringify(appState.projects));
  }
  if (Array.isArray(targetBackup.categories)) {
    appState.categories = JSON.parse(JSON.stringify(targetBackup.categories));
    localStorage.setItem('workhub_categories', JSON.stringify(appState.categories));
  }
  if (targetBackup.lang) {
    appState.lang = targetBackup.lang;
    localStorage.setItem('workhub_lang', appState.lang);
  }
  if (targetBackup.sidebarCollapsed !== undefined) {
    localStorage.setItem('workhub_sidebar_collapsed', targetBackup.sidebarCollapsed);
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      if (targetBackup.sidebarCollapsed === 'true') sidebar.classList.add('collapsed');
      else sidebar.classList.remove('collapsed');
    }
  }
  if (targetBackup.kpiHistory) {
    localStorage.setItem('workhub_kpi_history', targetBackup.kpiHistory);
  }

  isRestoringOrClearing = false;
  updateBackupButtonsState();
  refreshAllViews();
  showToast(t('toastBackupRestored'), 'success');
}

function executeStartFresh() {
  // Save complete backup of current workspace before clearing
  createAutomaticBackup('before-start-fresh');

  isRestoringOrClearing = true;

  // Clear all tasks, calendar events, and KPI comparison history without demo/sample data
  appState.tasks = [];
  appState.events = [];
  localStorage.setItem('workhub_tasks', '[]');
  localStorage.setItem('workhub_events', '[]');
  localStorage.setItem('workhub_kpi_history', '{}');

  isRestoringOrClearing = false;
  updateBackupButtonsState();
  refreshAllViews();
  showToast(t('toastStartFreshSuccess'), 'success');
}

// ==========================================================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  runOneTimeTaskMigration();
  initClock();
  initLanguageToggle();
  initSidebar();
  initNavigation();
  initGlobalSearch();
  initModals();
  initManagementModals();
  initCalendarControls();
  initGoogleCalendarIntegration();
  initGoogleSheetsIntegration();
  initMobileNav();

  // Render initial view
  refreshAllViews();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Refresh all UI elements when state or language updates
function refreshAllViews() {
  updateInterfaceLanguage();
  renderDashboard();
  renderTaskManagement();
  renderCalendar();
  renderReportsAnalytics();
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Update static interface labels when language changes
function updateInterfaceLanguage() {
  // Header
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');

  const langBtnText = document.getElementById('langBtnText');
  if (langBtnText) langBtnText.textContent = appState.lang === 'en' ? '中文' : 'EN';

  const refreshSpan = document.querySelector('#refreshWorkspaceBtn span');
  if (refreshSpan) refreshSpan.textContent = t('btnRefresh');

  const exportSpan = document.querySelector('#exportDataBtn span');
  if (exportSpan) exportSpan.textContent = t('btnExport');

  const restoreSpan = document.querySelector('#restoreSampleBtn span');
  if (restoreSpan) restoreSpan.textContent = t('btnRestoreSample');

  // Sidebar
  const navDash = document.querySelector('.nav-item[data-page="dashboard"] .nav-label');
  if (navDash) navDash.textContent = t('navDashboard');

  const navTasks = document.querySelector('.nav-item[data-page="tasks"] .nav-label');
  if (navTasks) navTasks.textContent = t('navTasks');

  const navCal = document.querySelector('.nav-item[data-page="calendar"] .nav-label');
  if (navCal) navCal.textContent = t('navCalendar');

  const navRep = document.querySelector('.nav-item[data-page="reports"] .nav-label');
  if (navRep) navRep.textContent = t('navReports');

  // Mobile bottom navigation (separate ids from the sidebar's .nav-label spans)
  const bottomNavHome = document.getElementById('bottomNavHomeText');
  if (bottomNavHome) bottomNavHome.textContent = t('navDashboard');
  const bottomNavTasks = document.getElementById('bottomNavTasksText');
  if (bottomNavTasks) bottomNavTasks.textContent = t('navTasks');
  const bottomNavCalendar = document.getElementById('bottomNavCalendarText');
  if (bottomNavCalendar) bottomNavCalendar.textContent = t('navCalendar');
  const bottomNavReports = document.getElementById('bottomNavReportsText');
  if (bottomNavReports) bottomNavReports.textContent = t('navReports');
  const bottomNavMore = document.getElementById('bottomNavMoreText');
  if (bottomNavMore) bottomNavMore.textContent = t('moreMenuLabel');

  // Mobile "More" sheet rows (mirror the desktop header buttons they forward to)
  const moreLangText = document.getElementById('moreMenuLangText');
  if (moreLangText) moreLangText.textContent = t('moreMenuLangRow');
  const moreRefreshText = document.getElementById('moreMenuRefreshText');
  if (moreRefreshText) moreRefreshText.textContent = t('moreMenuRefreshRow');
  const moreExportText = document.getElementById('moreMenuExportText');
  if (moreExportText) moreExportText.textContent = t('btnExport');
  const moreGsheetsText = document.getElementById('moreMenuGsheetsText');
  if (moreGsheetsText) moreGsheetsText.textContent = t('gsheetsConnectBtnLabel');
  const moreRestoreText = document.getElementById('moreMenuRestoreText');
  if (moreRestoreText) moreRestoreText.textContent = t('btnRestoreLatestBackup');
  const moreStartFreshText = document.getElementById('moreMenuStartFreshText');
  if (moreStartFreshText) moreStartFreshText.textContent = t('btnStartFresh');

  const roleSpan = document.querySelector('.exec-role');
  if (roleSpan) roleSpan.textContent = t('roleTitle');

  // Dashboard Headings
  const dashTitleEl = document.querySelector('#page-dashboard .section-title span:first-child');
  if (dashTitleEl) dashTitleEl.textContent = t('dashTitle');

  const addTaskBtns = document.querySelectorAll('.btn-add-task-label');
  addTaskBtns.forEach(el => { el.textContent = t('btnAddTask'); });

  // KPI Titles
  const kpiTotalTitle = document.querySelector('.kpi-card.total .kpi-title');
  if (kpiTotalTitle) kpiTotalTitle.textContent = t('kpiTotalTasks');

  const kpiOpenTitle = document.querySelector('.kpi-card.open .kpi-title');
  if (kpiOpenTitle) kpiOpenTitle.textContent = t('kpiOpenTasks');

  const kpiCompTitle = document.querySelector('.kpi-card.completed .kpi-title');
  if (kpiCompTitle) kpiCompTitle.textContent = t('kpiCompletedTasks');

  const kpiTodayTitle = document.querySelector('.kpi-card.today .kpi-title');
  if (kpiTodayTitle) kpiTodayTitle.textContent = t('kpiDueToday');

  const kpiOverdueTitle = document.querySelector('.kpi-card.overdue .kpi-title');
  if (kpiOverdueTitle) kpiOverdueTitle.textContent = t('kpiOverdue');

  // Chart Titles
  const statusChartTitle = document.querySelector('#statusChartTitleText');
  if (statusChartTitle) statusChartTitle.textContent = t('chartStatusTitle');
  const statusChartSub = document.querySelector('#statusChartSubText');
  if (statusChartSub) statusChartSub.textContent = t('chartStatusSub');

  const catChartTitle = document.querySelector('#catChartTitleText');
  if (catChartTitle) catChartTitle.textContent = t('chartCategoryTitle');
  const catChartSub = document.querySelector('#catChartSubText');
  if (catChartSub) catChartSub.textContent = t('chartCategorySub');

  // Focus Card Titles
  const focusTitle = document.querySelector('#focusSectionTitle');
  if (focusTitle) focusTitle.textContent = t('focusTitle');
  const focusSub = document.querySelector('#focusSectionSub');
  if (focusSub) focusSub.textContent = t('focusSub');

  const focOverdueTitle = document.querySelector('.focus-card.overdue .focus-card-title span');
  if (focOverdueTitle) focOverdueTitle.textContent = t('focusOverdue');

  const focTodayTitle = document.querySelector('.focus-card.today .focus-card-title span');
  if (focTodayTitle) focTodayTitle.textContent = t('focusDueToday');

  const focHighTitle = document.querySelector('.focus-card.high-pri .focus-card-title span');
  if (focHighTitle) focHighTitle.textContent = t('focusHighPriority');

  const focFollowTitle = document.querySelector('.focus-card.followup .focus-card-title span');
  if (focFollowTitle) focFollowTitle.textContent = t('focusWaiting');

  // Recent Tasks Table Header
  const recTitle = document.querySelector('#recentTableTitleText');
  if (recTitle) recTitle.textContent = t('recentTasksTitle');
  const recSub = document.querySelector('#recentTableSubText');
  if (recSub) recSub.textContent = t('recentTasksSub');

  // Dashboard Recent Tasks Table Headers (8 columns)
  const recHeaders = document.querySelectorAll('#page-dashboard .data-table thead th');
  if (recHeaders && recHeaders.length >= 8) {
    if (recHeaders[1]) recHeaders[1].textContent = t('thTaskName');
    if (recHeaders[2]) recHeaders[2].textContent = t('thProject');
    if (recHeaders[3]) recHeaders[3].textContent = t('thCategory');
    if (recHeaders[4]) recHeaders[4].textContent = t('thPriority');
    if (recHeaders[5]) recHeaders[5].textContent = t('thStatus');
    if (recHeaders[6]) recHeaders[6].textContent = t('thDueDate');
    if (recHeaders[7]) recHeaders[7].textContent = t('thActions');
  }

  // Task Management Table Headers (10 columns, incl. Completion Date)
  const taskHeaders = document.querySelectorAll('#page-tasks .data-table thead th');
  if (taskHeaders && taskHeaders.length >= 10) {
    if (taskHeaders[1]) taskHeaders[1].textContent = t('thTaskTitleDesc');
    if (taskHeaders[2]) taskHeaders[2].textContent = t('thProject');
    if (taskHeaders[3]) taskHeaders[3].textContent = t('thCategory');
    if (taskHeaders[4]) taskHeaders[4].textContent = t('thPriority');
    if (taskHeaders[5]) taskHeaders[5].textContent = t('thStatus');
    if (taskHeaders[6]) taskHeaders[6].textContent = t('thDueDate');
    if (taskHeaders[7]) taskHeaders[7].textContent = t('thCompletionDate');
    if (taskHeaders[8]) taskHeaders[8].textContent = t('thAssignee');
    if (taskHeaders[9]) taskHeaders[9].textContent = t('thActions');
  }

  // Monthly Task Summary (Dashboard) title
  const monthlySummaryTitleEl = document.querySelector('#monthlySummaryTitle');
  if (monthlySummaryTitleEl) monthlySummaryTitleEl.textContent = t('monthlySummaryTitle');

  // Task Management page
  const tasksPageTitle = document.querySelector('#page-tasks .section-title span:first-child');
  if (tasksPageTitle) tasksPageTitle.textContent = t('tasksPageTitle');

  const filterLabel = document.querySelector('#filterLabelText');
  if (filterLabel) filterLabel.textContent = t('filterLabel');

  const sortLabel = document.querySelector('#sortLabelText');
  if (sortLabel) sortLabel.textContent = t('sortLabel');

  // Dropdown Labels
  updateSelectOptions();

  const resetFiltersBtn = document.querySelector('#resetFiltersBtn span');
  if (resetFiltersBtn) resetFiltersBtn.textContent = t('btnResetFilters');

  // Calendar labels
  const calTitle = document.querySelector('#page-calendar .section-title span:first-child');
  if (calTitle) calTitle.textContent = t('calPageTitle');
  const addEventBtn = document.querySelector('#openAddEventModalBtn span');
  if (addEventBtn) addEventBtn.textContent = t('btnAddEvent');

  const gcalModalDescEl = document.getElementById('googleCalModalDescText');
  if (gcalModalDescEl) gcalModalDescEl.textContent = t('gcalModalDesc');
  const gcalSyncBtnTextEl = document.getElementById('googleCalSyncNowBtnText');
  if (gcalSyncBtnTextEl) gcalSyncBtnTextEl.textContent = t('gcalRefreshBtnLabel');
  const gcalDisconnectBtnTextEl = document.getElementById('googleCalDisconnectBtnText');
  if (gcalDisconnectBtnTextEl) gcalDisconnectBtnTextEl.textContent = t('gcalDisconnectBtnLabel');
  const gcalHeaderDisconnectTextEl = document.getElementById('googleCalHeaderDisconnectBtnText');
  if (gcalHeaderDisconnectTextEl) gcalHeaderDisconnectTextEl.textContent = t('gcalDisconnectBtnLabel');
  const gcalMyCalendarsTitleEl = document.getElementById('googleCalMyCalendarsTitleText');
  if (gcalMyCalendarsTitleEl) gcalMyCalendarsTitleEl.textContent = t('gcalMyCalendarsTitle');
  const gcalReadOnlyNoteEl = document.getElementById('googleCalReadOnlyNoteText');
  if (gcalReadOnlyNoteEl) gcalReadOnlyNoteEl.textContent = t('gcalReadOnlyNote');
  const gEventModalTitleEl = document.getElementById('gEventDetailsModalTitleText');
  if (gEventModalTitleEl) gEventModalTitleEl.textContent = t('gEventDetailsModalTitle');
  const gEventReadOnlyNoteEl = document.getElementById('gEventDetailsReadOnlyNote');
  if (gEventReadOnlyNoteEl) gEventReadOnlyNoteEl.textContent = t('gEventDetailsReadOnlyNote');
  const gEventTitleLabelEl = document.getElementById('gEventDetailsTitleLabel');
  if (gEventTitleLabelEl) gEventTitleLabelEl.textContent = t('gEventDetailsTitleLabel');
  const gEventTimeLabelEl = document.getElementById('gEventDetailsTimeLabel');
  if (gEventTimeLabelEl) gEventTimeLabelEl.textContent = t('gEventDetailsTimeLabel');
  const gEventLocationLabelEl = document.getElementById('gEventDetailsLocationLabel');
  if (gEventLocationLabelEl) gEventLocationLabelEl.textContent = t('gEventDetailsLocationLabel');
  const gEventDescLabelEl = document.getElementById('gEventDetailsDescLabel');
  if (gEventDescLabelEl) gEventDescLabelEl.textContent = t('gEventDetailsDescLabel');

  updateGoogleConnectBtnLabel();
  updateGoogleCalModalUI();

  const viewMon = document.querySelector('#view-month-btn');
  if (viewMon) viewMon.textContent = t('viewMonth');
  const viewWk = document.querySelector('#view-week-btn');
  if (viewWk) viewWk.textContent = t('viewWeek');
  const viewDy = document.querySelector('#view-day-btn');
  if (viewDy) viewDy.textContent = t('viewDay');
  const btnTod = document.querySelector('#calTodayBtn');
  if (btnTod) btnTod.textContent = t('btnToday');

  const todayAgTitle = document.querySelector('#todayAgendaCardTitle');
  if (todayAgTitle) todayAgTitle.textContent = t('calTodayAgenda');
  const upcomingTitle = document.querySelector('#upcomingEventsCardTitle');
  if (upcomingTitle) upcomingTitle.textContent = t('calUpcomingEvents');
  const quickAddTitle = document.querySelector('#quickAddCardTitle');
  if (quickAddTitle) quickAddTitle.textContent = t('calQuickAddTitle');

  const quickSubmit = document.querySelector('#quickAddEventForm button[type="submit"] span');
  if (quickSubmit) quickSubmit.textContent = t('btnQuickAddSubmit');

  const quickTitleInput = document.getElementById('quick-evt-title');
  if (quickTitleInput) quickTitleInput.placeholder = t('quickTitlePlaceholder');

  // Reports labels
  const repTitle = document.querySelector('#page-reports .section-title span:first-child');
  if (repTitle) repTitle.textContent = t('reportsPageTitle');
  const btnSummary = document.querySelector('#page-reports .section-title button span');
  if (btnSummary) btnSummary.textContent = t('btnDownloadSummary');

  const bannerTitle = document.querySelector('.report-banner-content h3');
  if (bannerTitle) bannerTitle.textContent = t('reportBannerTitle');
  const bannerSub = document.querySelector('.report-banner-content p');
  if (bannerSub) bannerSub.textContent = t('reportBannerSub');
  const btnPrelim = document.querySelector('.report-banner button span');
  if (btnPrelim) btnPrelim.textContent = t('btnGeneratePreliminary');

  const repOnTimeTitleEl = document.getElementById('repOnTimeTitle');
  if (repOnTimeTitleEl) repOnTimeTitleEl.textContent = t('repOnTimeTitle');
  const repTrainingLoadTitleEl = document.getElementById('repTrainingLoadTitle');
  if (repTrainingLoadTitleEl) repTrainingLoadTitleEl.textContent = t('repTrainingLoadTitle');
  const repCriticalLoadTitleEl = document.getElementById('repCriticalLoadTitle');
  if (repCriticalLoadTitleEl) repCriticalLoadTitleEl.textContent = t('repCriticalLoadTitle');
  const repAlignmentTitleEl = document.getElementById('repAlignmentTitle');
  if (repAlignmentTitleEl) repAlignmentTitleEl.textContent = t('repAlignmentTitle');
  const repWeeklyChartTitleEl = document.getElementById('repWeeklyChartTitle');
  if (repWeeklyChartTitleEl) repWeeklyChartTitleEl.textContent = t('repWeeklyChartTitle');
  const repAttainmentChartTitleEl = document.getElementById('repAttainmentChartTitle');
  if (repAttainmentChartTitleEl) repAttainmentChartTitleEl.textContent = t('repAttainmentChartTitle');

  // Modals
  const modTaskTitle = document.getElementById('taskModalTitleText');
  if (modTaskTitle) modTaskTitle.textContent = t('modalTaskAddTitle');
  const modEventTitle = document.getElementById('eventModalTitleText');
  if (modEventTitle) modEventTitle.textContent = t('modalEventAddTitle');

  const restoreBackupTitle = document.getElementById('restoreBackupModalTitleText');
  if (restoreBackupTitle) restoreBackupTitle.textContent = t('modalRestoreBackupTitle');
  const cancelRestoreBackupBtn = document.getElementById('cancelRestoreBackupBtn');
  if (cancelRestoreBackupBtn) cancelRestoreBackupBtn.textContent = t('btnCancel');
  const confirmRestoreBackupBtn = document.getElementById('confirmRestoreBackupBtn');
  if (confirmRestoreBackupBtn) confirmRestoreBackupBtn.textContent = t('btnConfirmRestoreBackup');

  const startFreshTitle = document.getElementById('startFreshModalTitleText');
  if (startFreshTitle) startFreshTitle.textContent = t('modalStartFreshTitle');
  const cancelStartFreshBtn = document.getElementById('cancelStartFreshBtn');
  if (cancelStartFreshBtn) cancelStartFreshBtn.textContent = t('btnCancel');
  const confirmStartFreshBtn = document.getElementById('confirmStartFreshBtn');
  if (confirmStartFreshBtn) confirmStartFreshBtn.textContent = t('btnConfirmStartFresh');

  // Manage Projects & Categories labels
  const btnManageProjSpan = document.getElementById('btnManageProjectsText');
  if (btnManageProjSpan) btnManageProjSpan.textContent = t('btnManageProjects');
  const btnManageCatSpan = document.getElementById('btnManageCategoriesText');
  if (btnManageCatSpan) btnManageCatSpan.textContent = t('btnManageCategories');

  const mpTitle = document.getElementById('manageProjectsModalTitleText');
  if (mpTitle) mpTitle.textContent = t('modalManageProjectsTitle');
  const mcTitle = document.getElementById('manageCategoriesModalTitleText');
  if (mcTitle) mcTitle.textContent = t('modalManageCategoriesTitle');

  const lblProjName = document.getElementById('labelNewProjectName');
  if (lblProjName) lblProjName.textContent = t('labelNewProjectName');
  const lblProjDesc = document.getElementById('labelNewProjectDesc');
  if (lblProjDesc) lblProjDesc.textContent = t('labelNewProjectDesc');
  const inProjName = document.getElementById('newProjectNameInput');
  if (inProjName) inProjName.placeholder = t('placeholderNewProject');

  const lblCatName = document.getElementById('labelNewCategoryName');
  if (lblCatName) lblCatName.textContent = t('labelNewCategoryName');
  const lblCatDesc = document.getElementById('labelNewCategoryDesc');
  if (lblCatDesc) lblCatDesc.textContent = t('labelNewCategoryDesc');
  const inCatName = document.getElementById('newCategoryNameInput');
  if (inCatName) inCatName.placeholder = t('placeholderNewCategory');

  const subProjBtn = document.querySelector('#submitNewProjectBtn span');
  if (subProjBtn) subProjBtn.textContent = t('btnAdd');
  const subCatBtn = document.querySelector('#submitNewCategoryBtn span');
  if (subCatBtn) subCatBtn.textContent = t('btnAdd');
  const doneProjBtn = document.getElementById('doneManageProjectsBtn');
  if (doneProjBtn) doneProjBtn.textContent = t('btnDone');
  const doneCatBtn = document.getElementById('doneManageCategoriesBtn');
  if (doneCatBtn) doneCatBtn.textContent = t('btnDone');

  const cancelEditBtn = document.getElementById('cancelEditItemBtn');
  if (cancelEditBtn) cancelEditBtn.textContent = t('btnCancel');

  // Export Modal labels
  const exportModTitle = document.getElementById('exportModalTitleText');
  if (exportModTitle) exportModTitle.textContent = t('modalExportTitle');
  const exportModDesc = document.getElementById('exportModalDescText');
  if (exportModDesc) exportModDesc.textContent = t('modalExportDesc');
  const exportExcelTitle = document.getElementById('exportExcelTitleText');
  if (exportExcelTitle) exportExcelTitle.textContent = t('exportExcelTitle');
  const exportExcelSub = document.getElementById('exportExcelSubText');
  if (exportExcelSub) exportExcelSub.textContent = t('exportExcelSub');
  const exportPDFTitle = document.getElementById('exportPDFTitleText');
  if (exportPDFTitle) exportPDFTitle.textContent = t('exportPDFTitle');
  const exportPDFSub = document.getElementById('exportPDFSubText');
  if (exportPDFSub) exportPDFSub.textContent = t('exportPDFSub');
  const cancelExportBtn = document.getElementById('cancelExportModalBtn');
  if (cancelExportBtn) cancelExportBtn.textContent = t('btnCancel');

  // Update backup buttons state & text in header
  updateBackupButtonsState();
}

function updateSelectOptions() {
  // Update Project filter
  const projSelect = document.getElementById('filter-project');
  if (projSelect && projSelect.options.length > 0) {
    projSelect.options[0].text = t('allProjects');
  }

  // Update Status filter
  const statusSelect = document.getElementById('filter-status');
  if (statusSelect && statusSelect.options.length > 0) {
    statusSelect.options[0].text = t('allStatuses');
  }

  // Update Priority filter
  const priSelect = document.getElementById('filter-priority');
  if (priSelect && priSelect.options.length > 0) {
    priSelect.options[0].text = t('allPriorities');
  }

  // Update Category filter
  const catSelect = document.getElementById('filter-category');
  if (catSelect && catSelect.options.length > 0) {
    catSelect.options[0].text = t('allCategories');
  }

  // Update Sort filter
  const sortSelect = document.getElementById('filter-sort');
  if (sortSelect && sortSelect.options.length >= 4) {
    sortSelect.options[0].text = t('sortNearFirst');
    sortSelect.options[1].text = t('sortFarFirst');
    sortSelect.options[2].text = t('sortPriority');
    sortSelect.options[3].text = t('sortTitle');
  }

  populateProjectAndCategorySelects();
}

function populateProjectAndCategorySelects() {
  const activeProjects = appState.projects.filter(p => p.active);
  const activeCategories = appState.categories.filter(c => c.active);

  // 0. dashboard-filter-project
  const dashProjEl = document.getElementById('dashboard-filter-project');
  if (dashProjEl) {
    dashProjEl.innerHTML = `<option value="ALL">${t('allProjects')}</option>` + 
      activeProjects.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
    if (appState.filters.dashboardProject && appState.filters.dashboardProject !== 'ALL') {
      dashProjEl.value = appState.filters.dashboardProject;
    }
  }

  // 1. filter-project
  const filterProjEl = document.getElementById('filter-project');
  if (filterProjEl) {
    const currentVal = filterProjEl.value;
    filterProjEl.innerHTML = `<option value="ALL">${t('allProjects')}</option>` + 
      activeProjects.map(p => `<option value="${p.name}">${p.name}</option>`).join('');
    if (appState.filters.project && appState.filters.project !== 'ALL') {
      filterProjEl.value = appState.filters.project;
    }
  }

  // 2. filter-category
  const filterCatEl = document.getElementById('filter-category');
  if (filterCatEl) {
    const currentVal = filterCatEl.value;
    filterCatEl.innerHTML = `<option value="ALL">${t('allCategories')}</option>` + 
      activeCategories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
    if (appState.filters.category && appState.filters.category !== 'ALL') {
      filterCatEl.value = appState.filters.category;
    }
  }

  // 3. task-project
  const taskProjEl = document.getElementById('task-project');
  if (taskProjEl) {
    const currentVal = taskProjEl.value || (activeProjects[0] ? activeProjects[0].name : 'SG Project');
    const allNames = new Set(activeProjects.map(p => p.name));
    if (currentVal) allNames.add(currentVal);
    taskProjEl.innerHTML = Array.from(allNames).map(name => `<option value="${name}">${name}</option>`).join('');
    taskProjEl.value = currentVal;
  }

  // 4. task-category
  const taskCatEl = document.getElementById('task-category');
  if (taskCatEl) {
    const currentVal = taskCatEl.value || (activeCategories[0] ? activeCategories[0].name : 'Training');
    const allNames = new Set(activeCategories.map(c => c.name));
    if (currentVal) allNames.add(currentVal);
    taskCatEl.innerHTML = Array.from(allNames).map(name => `<option value="${name}">${name}</option>`).join('');
    taskCatEl.value = currentVal;
  }

  // 5. event-category & quick-evt-cat
  const evtCatEl = document.getElementById('event-category');
  if (evtCatEl) {
    const currentVal = evtCatEl.value || (activeCategories[0] ? activeCategories[0].name : 'Training');
    const allNames = new Set(activeCategories.map(c => c.name));
    if (currentVal) allNames.add(currentVal);
    evtCatEl.innerHTML = Array.from(allNames).map(name => `<option value="${name}">${name}</option>`).join('');
    evtCatEl.value = currentVal;
  }

  const quickCatEl = document.getElementById('quick-evt-cat');
  if (quickCatEl) {
    const currentVal = quickCatEl.value || (activeCategories[0] ? activeCategories[0].name : 'Training');
    quickCatEl.innerHTML = activeCategories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
    if (currentVal && activeCategories.some(c => c.name === currentVal)) {
      quickCatEl.value = currentVal;
    }
  }
}

function initLanguageToggle() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    appState.lang = appState.lang === 'en' ? 'zh' : 'en';
    localStorage.setItem('workhub_lang', appState.lang);
    if (!isRestoringOrClearing) {
      createAutomaticBackup('settings-changed');
    }
    refreshAllViews();
    showToast(appState.lang === 'zh' ? '已切换至中文 (Simplified Chinese)' : 'Switched to English');
  });
}

// ==========================================================================
// CLOCK, GREETING & DAILY 8:00 AM REFRESH CHECK
// ==========================================================================
function initClock() {
  const datetimeEl = document.getElementById('liveDateTime');
  const greetingEl = document.getElementById('execGreeting');

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();

    let timeKey = 'greetingMorning';
    if (hours >= 12 && hours < 17) {
      timeKey = 'greetingAfternoon';
    } else if (hours >= 17) {
      timeKey = 'greetingEvening';
    }

    if (greetingEl) {
      greetingEl.textContent = t(timeKey);
    }

    if (datetimeEl) {
      const dateStr = now.toLocaleDateString(appState.lang === 'zh' ? 'zh-CN' : 'en-SG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      datetimeEl.innerHTML = `<i data-lucide="clock" style="width:14px; height:14px; stroke-width:2.5;"></i> ${dateStr} • ${now.toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} SGT`;
    }

    // Daily 8:00 AM local time refresh check (fires exactly once at 8:00 AM)
    const todayStr = formatDateStr(now);
    let lastDailyRefreshDate = localStorage.getItem('workhub_last_daily_refresh_date') || '';
    
    if (hours === 8 && now.getMinutes() === 0 && now.getSeconds() === 0 && lastDailyRefreshDate !== todayStr) {
      lastDailyRefreshDate = todayStr;
      localStorage.setItem('workhub_last_daily_refresh_date', todayStr);
      refreshAllViews();
      showToast(t('toastDailyRefresh'), 'success');
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// ==========================================================================
// SIDEBAR COLLAPSE & NAVIGATION
// ==========================================================================
function initSidebar() {
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('sidebar');

  const isCollapsed = localStorage.getItem('workhub_sidebar_collapsed') === 'true';
  if (isCollapsed && sidebar) {
    sidebar.classList.add('collapsed');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      const state = sidebar.classList.contains('collapsed');
      localStorage.setItem('workhub_sidebar_collapsed', state);
      if (!isRestoringOrClearing) {
        createAutomaticBackup('settings-changed');
      }
      setTimeout(() => {
        if (appState.chartInstances.statusChart) appState.chartInstances.statusChart.resize();
        if (appState.chartInstances.categoryChart) appState.chartInstances.categoryChart.resize();
      }, 300);
    });
  }
}

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const pageContents = document.querySelectorAll('.page-content');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetPage = item.getAttribute('data-page');
      if (!targetPage) return;

      navigateToPage(targetPage);
    });
  });

  // Export Data Button (opens Export Options Modal: Excel / PDF)
  const exportBtn = document.getElementById('exportDataBtn');
  const exportModal = document.getElementById('exportModalOverlay');
  const closeExportBtn = document.getElementById('closeExportModalBtn');
  const cancelExportBtn = document.getElementById('cancelExportModalBtn');
  const exportExcelBtn = document.getElementById('exportExcelBtn');
  const exportPDFBtn = document.getElementById('exportPDFBtn');

  if (exportBtn && exportModal) {
    exportBtn.addEventListener('click', () => {
      exportModal.classList.add('active');
    });
  }
  if (closeExportBtn && exportModal) {
    closeExportBtn.addEventListener('click', () => exportModal.classList.remove('active'));
  }
  if (cancelExportBtn && exportModal) {
    cancelExportBtn.addEventListener('click', () => exportModal.classList.remove('active'));
  }
  if (exportExcelBtn) {
    exportExcelBtn.addEventListener('click', () => exportAsExcel());
  }
  if (exportPDFBtn) {
    exportPDFBtn.addEventListener('click', () => exportAsPDF());
  }

  // Refresh Button
  const refreshBtn = document.getElementById('refreshWorkspaceBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      const icon = refreshBtn.querySelector('i');
      if (icon) icon.classList.add('spin');
      setTimeout(() => {
        if (icon) icon.classList.remove('spin');
        refreshAllViews();
        showToast(appState.lang === 'zh' ? '数据已同步并更新' : 'Workspace metrics synchronized successfully');
      }, 650);
    });
  }

  // Restore Latest Backup Button (opens Restore Backup Modal)
  const restoreBackupBtn = document.getElementById('restoreLatestBackupBtn');
  const restoreBackupModal = document.getElementById('restoreBackupModalOverlay');
  const cancelRestoreBackupBtn = document.getElementById('cancelRestoreBackupBtn');
  const confirmRestoreBackupBtn = document.getElementById('confirmRestoreBackupBtn');
  const closeRestoreBackupModalBtn = document.getElementById('closeRestoreBackupModalBtn');

  if (restoreBackupBtn && restoreBackupModal) {
    restoreBackupBtn.addEventListener('click', () => {
      const backups = getBackupsList();
      if (backups.length === 0) {
        showToast(t('noBackupAvailableYet'), 'alert');
        return;
      }
      const latest = backups[backups.length - 1];
      const fmt = new Date(latest.timestamp).toLocaleString(appState.lang === 'zh' ? 'zh-CN' : 'en-SG', {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
      const modalTextEl = document.getElementById('restoreBackupModalText');
      if (modalTextEl) {
        modalTextEl.textContent = t('modalRestoreBackupText', { timestamp: fmt });
      }
      restoreBackupModal.classList.add('active');
    });
  }
  if (cancelRestoreBackupBtn && restoreBackupModal) {
    cancelRestoreBackupBtn.addEventListener('click', () => {
      restoreBackupModal.classList.remove('active');
    });
  }
  if (closeRestoreBackupModalBtn && restoreBackupModal) {
    closeRestoreBackupModalBtn.addEventListener('click', () => {
      restoreBackupModal.classList.remove('active');
    });
  }
  if (confirmRestoreBackupBtn && restoreBackupModal) {
    confirmRestoreBackupBtn.addEventListener('click', () => {
      restoreBackupModal.classList.remove('active');
      executeRestoreLatestBackup();
    });
  }

  // Start Fresh Button (opens Start Fresh Modal)
  const startFreshBtn = document.getElementById('startFreshBtn');
  const startFreshModal = document.getElementById('startFreshModalOverlay');
  const cancelStartFreshBtn = document.getElementById('cancelStartFreshBtn');
  const confirmStartFreshBtn = document.getElementById('confirmStartFreshBtn');
  const closeStartFreshModalBtn = document.getElementById('closeStartFreshModalBtn');

  if (startFreshBtn && startFreshModal) {
    startFreshBtn.addEventListener('click', () => {
      const modalTextEl = document.getElementById('startFreshModalText');
      if (modalTextEl) {
        modalTextEl.textContent = t('modalStartFreshText');
      }
      startFreshModal.classList.add('active');
    });
  }
  if (cancelStartFreshBtn && startFreshModal) {
    cancelStartFreshBtn.addEventListener('click', () => {
      startFreshModal.classList.remove('active');
    });
  }
  if (closeStartFreshModalBtn && startFreshModal) {
    closeStartFreshModalBtn.addEventListener('click', () => {
      startFreshModal.classList.remove('active');
    });
  }
  if (confirmStartFreshBtn && startFreshModal) {
    confirmStartFreshBtn.addEventListener('click', () => {
      startFreshModal.classList.remove('active');
      executeStartFresh();
    });
  }
}

// ==========================================================================
// MOBILE NAVIGATION (hamburger drawer, bottom nav, "More" sheet)
// ==========================================================================
// Purely additive: the 4 main bottom-nav buttons already carry the same
// .nav-item + data-page markup the sidebar uses, so initNavigation() (above)
// wires their page-switching automatically — nothing here duplicates that
// logic. This block only handles: opening/closing the mobile sidebar
// drawer, and the "More" sheet, whose rows simply forward a click to the
// existing (desktop) header buttons so their original handlers run as-is.
function initMobileNav() {
  const sidebar = document.getElementById('sidebar');
  const hamburgerBtn = document.getElementById('mobileMenuToggleBtn');
  const backdrop = document.getElementById('mobileSidebarBackdrop');

  function openMobileSidebar() {
    if (sidebar) sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('active');
  }
  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (sidebar && sidebar.classList.contains('mobile-open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeMobileSidebar);
  }
  // Closing the drawer after picking a page is a mobile-only UX nicety; the
  // actual page switch is already handled by initNavigation()'s own listener.
  if (sidebar) {
    sidebar.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', closeMobileSidebar);
    });
  }

  // ---- "More" bottom sheet ----
  const moreOverlay = document.getElementById('moreMenuOverlay');
  const headerMoreBtn = document.getElementById('mobileMoreBtn');
  const bottomNavMoreBtn = document.getElementById('bottomNavMoreBtn');

  function openMoreMenu() {
    if (moreOverlay) moreOverlay.classList.add('active');
  }
  function closeMoreMenu() {
    if (moreOverlay) moreOverlay.classList.remove('active');
  }

  if (headerMoreBtn) headerMoreBtn.addEventListener('click', openMoreMenu);
  if (bottomNavMoreBtn) bottomNavMoreBtn.addEventListener('click', openMoreMenu);
  if (moreOverlay) {
    // Tapping the dimmed backdrop (outside the sheet itself) closes it.
    moreOverlay.addEventListener('click', (e) => {
      if (e.target === moreOverlay) closeMoreMenu();
    });
  }

  // Each row forwards to the existing header button's own click handler —
  // no business logic is reimplemented here.
  const rowToButtonId = {
    moreMenuLangRow: 'langToggleBtn',
    moreMenuRefreshRow: 'refreshWorkspaceBtn',
    moreMenuExportRow: 'exportDataBtn',
    moreMenuGsheetsRow: 'gsheetsConnectBtn',
    moreMenuRestoreRow: 'restoreLatestBackupBtn',
    moreMenuStartFreshRow: 'startFreshBtn'
  };
  Object.keys(rowToButtonId).forEach(rowId => {
    const row = document.getElementById(rowId);
    const targetBtn = document.getElementById(rowToButtonId[rowId]);
    if (row && targetBtn) {
      row.addEventListener('click', () => {
        closeMoreMenu();
        targetBtn.click();
      });
    }
  });
}

function navigateToPage(targetPage) {
  const navItems = document.querySelectorAll('.nav-item');
  const pageContents = document.querySelectorAll('.page-content');

  navItems.forEach(n => {
    if (n.getAttribute('data-page') === targetPage) {
      n.classList.add('active');
    } else {
      n.classList.remove('active');
    }
  });

  pageContents.forEach(page => {
    if (page.id === `page-${targetPage}`) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  appState.currentTab = targetPage;

  if (targetPage === 'dashboard') {
    renderDashboard();
  } else if (targetPage === 'tasks') {
    renderTaskManagement();
  } else if (targetPage === 'calendar') {
    renderCalendar();
  } else if (targetPage === 'reports') {
    renderReportsAnalytics();
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Global Search
function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    appState.filters.search = e.target.value.trim().toLowerCase();
    appState.taskManagementPage = 1;
    renderDashboard();
    renderTaskManagement();
    if (window.lucide) lucide.createIcons();
  });
}

// ==========================================================================
// DASHBOARD RENDERING & ANALYTICS
// ==========================================================================
function renderDashboard() {
  const allTasks = appState.tasks;
  const selectedProj = appState.filters.dashboardProject || 'ALL';
  const tasks = selectedProj === 'ALL' ? allTasks : allTasks.filter(t => (t.project || 'SG Project') === selectedProj);
  const todayStr = getTodaySGTStr();

  // Calculate KPI Counts
  const totalTasksCount = tasks.length;
  // Open Tasks = Not Started, In Progress, Waiting, Review, On Hold (not Completed or Cancelled)
  const openTasksCount = tasks.filter(t => t.status !== 'Completed' && t.status !== 'Cancelled').length;
  const completedTasksCount = tasks.filter(t => t.status === 'Completed').length;
  const dueTodayCount = tasks.filter(t => t.dueDate === todayStr && t.status !== 'Completed' && t.status !== 'Cancelled').length;
  const overdueCount = tasks.filter(t => t.dueDate < todayStr && t.status !== 'Completed' && t.status !== 'Cancelled').length;

  // Record Today's KPI Snapshot into Local History when viewing all projects
  if (selectedProj === 'ALL') {
    recordTodayKpiSnapshot(totalTasksCount, openTasksCount, completedTasksCount, dueTodayCount, overdueCount);
  }

  // Calculate Change Since Yesterday
  const yesterdaySnapshot = getYesterdayKpiSnapshot();

  updateKpiCard('kpi-total', totalTasksCount, yesterdaySnapshot ? totalTasksCount - yesterdaySnapshot.total : null, 'changeNewTasks');
  updateKpiCard('kpi-open', openTasksCount, yesterdaySnapshot ? openTasksCount - yesterdaySnapshot.open : null, 'changeOpenTasks');
  updateKpiCard('kpi-completed', completedTasksCount, yesterdaySnapshot ? completedTasksCount - yesterdaySnapshot.completed : null, 'changeCompleted');
  updateKpiCard('kpi-today', dueTodayCount, yesterdaySnapshot ? dueTodayCount - yesterdaySnapshot.dueToday : null, 'changeDueToday');
  updateKpiCard('kpi-overdue', overdueCount, yesterdaySnapshot ? overdueCount - yesterdaySnapshot.overdue : null, 'changeOverdue');

  // Render Charts
  renderDashboardCharts(tasks);

  // Render Monthly Task Summary (personal daily task metrics, current month)
  renderMonthlyTaskSummary(tasks);

  // Render Today's Focus Cards
  renderFocusCards(tasks);

  // Render Recent Tasks Table (Sorted by Nearest Due Date)
  renderRecentTasksTable(tasks);
}

function updateKpiCard(kpiPrefix, count, diff, changeKey) {
  const valueEl = document.getElementById(`${kpiPrefix}-value`);
  const changeEl = document.getElementById(`${kpiPrefix}-change`);

  if (valueEl) {
    valueEl.textContent = count;
  }

  if (changeEl) {
    if (diff === null) {
      changeEl.className = 'kpi-change-pill neutral';
      changeEl.textContent = t('noComparisonYet');
    } else {
      const sign = diff >= 0 ? `+${diff}` : `${diff}`;
      const pillClass = diff > 0 ? 'positive' : (diff === 0 ? 'neutral' : 'negative');
      changeEl.className = `kpi-change-pill ${pillClass}`;
      changeEl.textContent = t(changeKey, { val: sign });
    }
  }
}

function recordTodayKpiSnapshot(total, open, completed, dueToday, overdue) {
  let history = {};
  const savedHistory = localStorage.getItem('workhub_kpi_history');
  if (savedHistory) {
    try {
      history = JSON.parse(savedHistory);
    } catch (e) {
      history = {};
    }
  }
  history[getTodaySGTStr()] = { total, open, completed, dueToday, overdue };
  localStorage.setItem('workhub_kpi_history', JSON.stringify(history));
}

function getYesterdayKpiSnapshot() {
  const savedHistory = localStorage.getItem('workhub_kpi_history');
  if (!savedHistory) return null;
  try {
    const history = JSON.parse(savedHistory);
    return history[getYesterdaySGTStr()] || null;
  } catch (e) {
    return null;
  }
}

// Approved Color Palette & Mappings: #F6F3A9, #D5F6FB, #F6B8D0, #FFAA93, #F7DFC2, #737373, #D7CAB7, #9FBDFD, #FFF3A4, #CFCFCF, #E5ECF8, #EFDFD8
const STATUS_COLOR_MAP = {
  'Not Started': '#F6F3A9',
  'In Progress': '#D5F6FB',
  'Waiting': '#F6B8D0',
  'Review': '#FFAA93',
  'On Hold': '#F7DFC2',
  'Completed': '#737373',
  'Cancelled': '#D7CAB7'
};

const CATEGORY_COLOR_MAP = {
  'HR': '#EFDFD8',
  'Training': '#EFDFD8',
  'Meeting': '#EFDFD8',
  'Report': '#EFDFD8',
  'System': '#EFDFD8',
  'Others': '#EFDFD8'
};

const PROJECT_COLOR_MAP = {
  'SG Project': '#E5ECF8',
  'CN Project': '#E5ECF8',
  'PP Project': '#E5ECF8'
};

const PRIORITY_COLOR_MAP = {
  'Critical': '#FF746C',
  'High': '#FFF3A4',
  'Medium': '#9FBDFD',
  'Low': '#CFCFCF'
};

// ==========================================================================
// MONTHLY TASK SUMMARY (Dashboard) — personal daily task metrics for the
// current calendar month, computed from Due Date, on top of the existing 5
// KPI cards above (additive only — those cards are untouched).
// ==========================================================================
function renderDashboardMonthTabs() {
  const container = document.getElementById('dashboardMonthTabs');
  if (!container) return;

  const months = getTaskMonthTabList();
  if (!months.includes(appState.filters.dashboardMonth)) {
    appState.filters.dashboardMonth = getTodaySGTStr().slice(0, 7);
  }

  container.innerHTML = months.map(m => {
    const isActive = m === appState.filters.dashboardMonth;
    return `
      <button type="button" class="month-tab ${isActive ? 'active' : ''}" onclick="selectDashboardMonth('${m}')">
        ${formatMonthTabLabel(m)}
      </button>
    `;
  }).join('');
}

function selectDashboardMonth(monthStr) {
  appState.filters.dashboardMonth = monthStr;
  renderDashboard();
  if (window.lucide) lucide.createIcons();
}
window.selectDashboardMonth = selectDashboardMonth;

function renderMonthlyTaskSummary(tasks) {
  const summaryStatsEl = document.getElementById('monthlySummaryStats');
  const summarySubEl = document.getElementById('monthlySummarySubText');
  if (!summaryStatsEl) return;

  renderDashboardMonthTabs();

  const todayStr = getTodaySGTStr();
  const currentMonth = appState.filters.dashboardMonth || todayStr.slice(0, 7);
  const monthTasks = tasks.filter(t => t.dueDate && t.dueDate.slice(0, 7) === currentMonth);

  const totalTasks = monthTasks.length;
  const completed = monthTasks.filter(t => t.status === 'Completed').length;
  const inProgress = monthTasks.filter(t => t.status === 'In Progress').length;
  const waiting = monthTasks.filter(t => t.status === 'Waiting').length;
  const overdue = monthTasks.filter(t => t.dueDate < todayStr && t.status !== 'Completed' && t.status !== 'Cancelled').length;
  const completionRate = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;

  // On-time Completion Rate: of the Completed tasks in this month that we
  // actually KNOW a Completion Date for (i.e. completed since this feature
  // shipped), how many were completed on or before their Due Date. Legacy/
  // migrated Completed tasks with no real Completion Date are excluded from
  // this calculation rather than guessed at — never invented.
  const completedWithKnownDate = monthTasks.filter(t => t.status === 'Completed' && t.completedDate);
  const onTimeCount = completedWithKnownDate.filter(t => t.completedDate <= t.dueDate).length;
  const onTimeRate = completedWithKnownDate.length > 0 ? Math.round((onTimeCount / completedWithKnownDate.length) * 100) : null;

  const monthLabel = formatMonthTabLabel(currentMonth);
  if (summarySubEl) summarySubEl.textContent = monthLabel;

  const stats = [
    { label: t('mthTotalTasks'), value: totalTasks },
    { label: t('mthCompleted'), value: completed },
    { label: t('mthInProgress'), value: inProgress },
    { label: t('mthWaiting'), value: waiting },
    { label: t('mthOverdue'), value: overdue },
    { label: t('mthCompletionRate'), value: `${completionRate}%` },
    { label: t('mthOnTimeRate'), value: onTimeRate === null ? '—' : `${onTimeRate}%` }
  ];

  summaryStatsEl.innerHTML = stats.map(s => `
    <div class="monthly-stat-item">
      <span class="monthly-stat-label">${s.label}</span>
      <span class="monthly-stat-value">${s.value}</span>
    </div>
  `).join('');

  // Donut Chart: Completed vs Remaining, for the current month
  const chartCanvas = document.getElementById('monthlyCompletionChart');
  if (chartCanvas && typeof Chart !== 'undefined') {
    if (appState.chartInstances.monthlyCompletionChart) {
      appState.chartInstances.monthlyCompletionChart.destroy();
    }
    const remaining = Math.max(totalTasks - completed, 0);
    appState.chartInstances.monthlyCompletionChart = new Chart(chartCanvas, {
      type: 'doughnut',
      data: {
        labels: [t('mthCompleted'), t('mthRemaining')],
        datasets: [{
          data: [completed, remaining],
          backgroundColor: [STATUS_COLOR_MAP['Completed'], '#CFCFCF'],
          borderWidth: 2,
          borderColor: '#FFFFFF',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#2F0000',
              font: { family: 'Microsoft YaHei UI', size: 10, weight: '700' },
              padding: 6,
              usePointStyle: true,
              pointStyle: 'circle',
              boxWidth: 8
            }
          },
          tooltip: {
            backgroundColor: '#2F0000',
            titleFont: { family: 'Microsoft YaHei UI', weight: '800' },
            bodyFont: { family: 'Microsoft YaHei UI' },
            padding: 10,
            cornerRadius: 8
          }
        },
        cutout: '66%'
      }
    });
  }
}

// Render Dashboard Charts with Chart.js (Strict Approved Mappings & Interactive Clicking)
function renderDashboardCharts(tasks) {
  if (typeof Chart === 'undefined') return;

  // 1. Status Doughnut Chart (7 statuses)
  const statuses = ['Not Started', 'In Progress', 'Waiting', 'Review', 'On Hold', 'Completed', 'Cancelled'];
  const statusCounts = statuses.map(s => tasks.filter(t => t.status === s).length);

  const statusCanvas = document.getElementById('tasksByStatusChart');
  if (statusCanvas) {
    if (appState.chartInstances.statusChart) {
      appState.chartInstances.statusChart.destroy();
    }
    appState.chartInstances.statusChart = new Chart(statusCanvas, {
      type: 'doughnut',
      data: {
        labels: statuses,
        datasets: [{
          data: statusCounts,
          backgroundColor: statuses.map(s => STATUS_COLOR_MAP[s] || '#737373'),
          borderWidth: 2,
          borderColor: '#FFFFFF',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const selectedStatus = chart.data.labels[idx];
            // Open Task Management and apply Status filter
            appState.filters.status = selectedStatus;
            appState.filters.project = 'ALL';
            appState.filters.priority = 'ALL';
            appState.filters.category = 'ALL';
            const selEl = document.getElementById('filter-status');
            if (selEl) selEl.value = selectedStatus;
            navigateToPage('tasks');
            showToast(t('toastFilteredBy', { type: appState.lang === 'zh' ? '状态' : 'Status', val: selectedStatus }));
          }
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#2F0000',
              font: { family: 'Microsoft YaHei UI', size: 11, weight: '700' },
              padding: 10,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            backgroundColor: '#2F0000',
            titleFont: { family: 'Microsoft YaHei UI', weight: '800' },
            bodyFont: { family: 'Microsoft YaHei UI' },
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              title: (tooltipItems) => {
                return tooltipItems[0].label;
              },
              label: (tooltipItem) => {
                const count = tooltipItem.raw;
                return t('tooltipTaskCount', { count });
              },
              afterLabel: (tooltipItem) => {
                const label = tooltipItem.label;
                const matching = appState.tasks.filter(t => t.status === label);
                const names = matching.slice(0, 5).map(m => `• ${m.title}`);
                if (matching.length > 5) {
                  names.push(t('tooltipAndMore', { count: matching.length - 5 }));
                }
                names.push('');
                names.push(t('tooltipClickGuidance'));
                return names;
              }
            }
          }
        },
        cutout: '66%'
      }
    });
  }

  // 2. Category Bar Chart (Dynamic from appState.categories)
  const activeCatNames = appState.categories.filter(c => c.active).map(c => c.name);
  const archivedCatNamesWithTasks = appState.categories.filter(c => !c.active && tasks.some(t => t.category === c.name)).map(c => c.name);
  const categories = Array.from(new Set([...activeCatNames, ...archivedCatNamesWithTasks]));
  const categoryCounts = categories.map(cat => tasks.filter(t => t.category === cat).length);

  const catCanvas = document.getElementById('tasksByCategoryChart');
  if (catCanvas) {
    if (appState.chartInstances.categoryChart) {
      appState.chartInstances.categoryChart.destroy();
    }
    appState.chartInstances.categoryChart = new Chart(catCanvas, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [{
          label: 'Tasks Count',
          data: categoryCounts,
          backgroundColor: categories.map((_, i) => {
            const opacities = [1, 0.93, 0.86, 0.79, 0.96, 0.89, 0.82, 0.9, 0.85];
            const alpha = opacities[i % opacities.length];
            return `rgba(239, 223, 216, ${alpha})`;
          }),
          borderColor: '#D4C3B8',
          borderWidth: 1,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const selectedCat = chart.data.labels[idx];
            // Open Task Management and apply Category filter
            appState.filters.category = selectedCat;
            appState.filters.project = 'ALL';
            appState.filters.status = 'ALL';
            appState.filters.priority = 'ALL';
            const selEl = document.getElementById('filter-category');
            if (selEl) selEl.value = selectedCat;
            navigateToPage('tasks');
            showToast(t('toastFilteredBy', { type: appState.lang === 'zh' ? '业务类别' : 'Category', val: selectedCat }));
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#2F0000',
            titleFont: { family: 'Microsoft YaHei UI', weight: '800' },
            bodyFont: { family: 'Microsoft YaHei UI' },
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              title: (tooltipItems) => {
                return tooltipItems[0].label;
              },
              label: (tooltipItem) => {
                const count = tooltipItem.raw;
                return t('tooltipTaskCount', { count });
              },
              afterLabel: (tooltipItem) => {
                const label = tooltipItem.label;
                const matching = appState.tasks.filter(t => t.category === label);
                const names = matching.slice(0, 5).map(m => `• ${m.title}`);
                if (matching.length > 5) {
                  names.push(t('tooltipAndMore', { count: matching.length - 5 }));
                }
                names.push('');
                names.push(t('tooltipClickGuidance'));
                return names;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#2F0000',
              font: { family: 'Microsoft YaHei UI', size: 11, weight: '700' }
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              color: '#2F0000',
              font: { family: 'Microsoft YaHei UI', size: 11, weight: '700' }
            },
            grid: {
              color: 'rgba(47, 0, 0, 0.06)'
            }
          }
        }
      }
    });
  }
}

// Render Today's Focus - Four Task Cards
function renderFocusCards(tasks) {
  const todayStr = getTodaySGTStr();

  // 1. Overdue (< todayStr & not completed/cancelled)
  const overdueTasks = tasks.filter(t => t.dueDate < todayStr && t.status !== 'Completed' && t.status !== 'Cancelled');
  renderFocusList('focus-overdue-list', 'focus-overdue-count', overdueTasks, t('emptyOverdue'));

  // 2. Due Today (=== todayStr & not completed/cancelled)
  const dueTodayTasks = tasks.filter(t => t.dueDate === todayStr && t.status !== 'Completed' && t.status !== 'Cancelled');
  renderFocusList('focus-today-list', 'focus-today-count', dueTodayTasks, t('emptyDueToday'));

  // 3. High Priority (Critical or High & not completed/cancelled)
  const highPriTasks = tasks.filter(t => (t.priority === 'Critical' || t.priority === 'High') && t.status !== 'Completed' && t.status !== 'Cancelled');
  renderFocusList('focus-high-list', 'focus-high-count', highPriTasks, t('emptyHighPriority'));

  // 4. Waiting Follow-up (Waiting, Review, or On Hold & not completed/cancelled)
  const waitingTasks = tasks.filter(t => (t.status === 'Waiting' || t.status === 'Review' || t.status === 'On Hold') && t.status !== 'Completed' && t.status !== 'Cancelled');
  renderFocusList('focus-waiting-list', 'focus-waiting-count', waitingTasks, t('emptyWaiting'));
}

function renderFocusList(containerId, badgeId, taskList, emptyMsg) {
  const container = document.getElementById(containerId);
  const badge = document.getElementById(badgeId);

  if (badge) {
    badge.textContent = taskList.length;
  }

  if (!container) return;

  if (taskList.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px 10px; text-align: center; color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">
        <i data-lucide="check-circle" style="width:28px; height:28px; color: var(--status-completed-text); margin-bottom: 6px; display:inline-block;"></i><br>
        ${emptyMsg}
      </div>
    `;
    return;
  }

  container.innerHTML = taskList.map(task => `
    <div class="focus-task-item ${task.status === 'Completed' ? 'completed' : ''}" data-id="${task.id}">
      <input type="checkbox" class="task-checkbox" ${task.status === 'Completed' ? 'checked' : ''} onchange="toggleTaskStatus('${task.id}', this.checked)">
      <div class="focus-task-content" onclick="openEditTaskModal('${task.id}')">
        <div class="focus-task-title" title="${task.title}">${task.title}</div>
        <div class="focus-task-meta">
          <span class="badge-project badge-project-${(task.project || 'SG Project').replace(/\s+/g, '-')}">${task.project || 'SG Project'}</span>
          <span class="badge-cat badge-cat-${task.category.replace(/\s+/g, '-')}">${task.category}</span>
          <span class="badge badge-priority-${task.priority}">${task.priority}</span>
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted);">
            <i data-lucide="calendar" style="width:12px;height:12px;display:inline-block;vertical-align:-1px;"></i> ${formatShortDate(task.dueDate)}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Recent Tasks Table on Dashboard (sorted by nearest due date)
function renderRecentTasksTable(tasks) {
  const tbody = document.getElementById('recentTasksTableBody');
  if (!tbody) return;

  // Filter out search if present, sort by nearest due date
  let sortedTasks = [...tasks];
  if (appState.filters.search) {
    sortedTasks = sortedTasks.filter(t => 
      t.title.toLowerCase().includes(appState.filters.search) ||
      t.category.toLowerCase().includes(appState.filters.search) ||
      (t.project && t.project.toLowerCase().includes(appState.filters.search)) ||
      t.assignee.toLowerCase().includes(appState.filters.search)
    );
  }

  sortedTasks.sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  // Show up to 8 top urgent tasks
  const displayTasks = sortedTasks.slice(0, 8);
  const todayStr = getTodaySGTStr();

  if (displayTasks.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-muted); font-weight: 700;">
          ${t('emptyTable')}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = displayTasks.map(task => `
    <tr class="${task.status === 'Completed' ? 'row-completed' : ''}">
      <td style="width: 44px; text-align: center;" data-label="">
        <input type="checkbox" class="task-checkbox" ${task.status === 'Completed' ? 'checked' : ''} onchange="toggleTaskStatus('${task.id}', this.checked)">
      </td>
      <td class="task-title-cell" style="font-weight: 700; cursor: pointer;" onclick="openEditTaskModal('${task.id}')" data-label="Task">
        ${task.title}
      </td>
      <td data-label="Project">
        <span class="badge-project badge-project-${(task.project || 'SG Project').replace(/\s+/g, '-')}">${task.project || 'SG Project'}</span>
      </td>
      <td data-label="Category">
        <span class="badge-cat badge-cat-${task.category.replace(/\s+/g, '-')}">${task.category}</span>
      </td>
      <td data-label="Priority">
        <span class="badge badge-priority-${task.priority}">${task.priority}</span>
      </td>
      <td data-label="Status">
        <span class="badge badge-status-${task.status.replace(/\s+/g, '-')}">${task.status}</span>
      </td>
      <td data-label="Due Date">
        <span style="font-weight: 800; color: ${task.dueDate < todayStr && task.status !== 'Completed' && task.status !== 'Cancelled' ? '#FFAA93' : 'var(--text-main)'};">
          ${formatDisplayDate(task.dueDate)}
        </span>
      </td>
      <td data-label="">
        <div class="action-btn-group">
          <button class="btn-icon" title="Edit Task" onclick="openEditTaskModal('${task.id}')">
            <i data-lucide="edit-3"></i>
          </button>
          <button class="btn-icon delete" title="Delete Task" onclick="deleteTask('${task.id}')">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ==========================================================================
// TASK MANAGEMENT TABLE & FILTERING
// ==========================================================================
// ==========================================================================
// TASK MANAGEMENT — MONTHLY TAB NAVIGATION (filters by Due Date's month)
// ==========================================================================
const MONTH_NAMES_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_NAMES_ZH = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

function formatMonthTabLabel(monthStr) {
  // monthStr is 'YYYY-MM'
  const [y, m] = monthStr.split('-').map(s => parseInt(s, 10));
  if (appState.lang === 'zh') {
    return `${y}年${MONTH_NAMES_ZH[m - 1]}`;
  }
  return `${MONTH_NAMES_EN[m - 1]} ${y}`;
}

// Builds the list of distinct 'YYYY-MM' months (by Task Due Date) to show as
// tabs, always including the current month even if it has zero tasks yet, so
// the tab row never disappears and future months (e.g. September 2026) start
// showing up automatically as soon as any task is due in them.
function getTaskMonthTabList() {
  const months = new Set();
  months.add(getTodaySGTStr().slice(0, 7));
  appState.tasks.forEach(task => {
    if (task.dueDate && task.dueDate.length >= 7) {
      months.add(task.dueDate.slice(0, 7));
    }
  });
  return Array.from(months).sort();
}

function renderTaskMonthTabs() {
  const container = document.getElementById('taskMonthTabs');
  if (!container) return;

  const months = getTaskMonthTabList();

  // Guard: if the previously-selected month tab no longer exists (should be
  // rare — only if every task in that month was deleted), fall back to the
  // current month rather than leaving the UI on a dead selection.
  if (!months.includes(appState.filters.taskMonth)) {
    appState.filters.taskMonth = getTodaySGTStr().slice(0, 7);
  }

  container.innerHTML = months.map(m => {
    const count = appState.tasks.filter(t => t.dueDate && t.dueDate.slice(0, 7) === m).length;
    const isActive = m === appState.filters.taskMonth;
    return `
      <button type="button" class="month-tab ${isActive ? 'active' : ''}" onclick="selectTaskMonth('${m}')">
        ${formatMonthTabLabel(m)} <span class="month-tab-count">${count}</span>
      </button>
    `;
  }).join('');
}

function selectTaskMonth(monthStr) {
  appState.filters.taskMonth = monthStr;
  appState.taskManagementPage = 1; // changing month resets pagination
  renderTaskManagement();
  if (window.lucide) lucide.createIcons();
}
window.selectTaskMonth = selectTaskMonth;

// ==========================================================================
// TASK MANAGEMENT — PAGINATION
// ==========================================================================
// Matches the app's existing "8 items" convention (the Dashboard's Recent
// Tasks table already shows its top 8). This only controls how many ALREADY
// FILTERED rows get sliced into the DOM per page — it never touches
// appState.tasks or creates/duplicates any task data.
const TASK_PAGE_SIZE = 8;

function renderTaskPagination(currentPage, totalPages) {
  const container = document.getElementById('taskPagination');
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let pageButtons = '';
  for (let p = 1; p <= totalPages; p++) {
    pageButtons += `<button type="button" class="pagination-btn page-num ${p === currentPage ? 'active' : ''}" onclick="goToTaskPage(${p})">${p}</button>`;
  }

  container.innerHTML = `
    <button type="button" class="pagination-btn pagination-nav" onclick="goToTaskPage(${currentPage - 1})" ${currentPage <= 1 ? 'disabled' : ''}>
      <i data-lucide="chevron-left"></i><span>${t('btnPrevious')}</span>
    </button>
    <div class="pagination-pages">${pageButtons}</div>
    <button type="button" class="pagination-btn pagination-nav" onclick="goToTaskPage(${currentPage + 1})" ${currentPage >= totalPages ? 'disabled' : ''}>
      <span>${t('btnNext')}</span><i data-lucide="chevron-right"></i>
    </button>
  `;
  if (window.lucide) lucide.createIcons();
}

function goToTaskPage(page) {
  appState.taskManagementPage = page;
  renderTaskManagement();
  if (window.lucide) lucide.createIcons();
}
window.goToTaskPage = goToTaskPage;

function renderTaskManagement() {
  const tbody = document.getElementById('taskManagementTableBody');
  const countEl = document.getElementById('taskCountIndicator');
  const activeFilterBanner = document.getElementById('activeFilterBanner');
  if (!tbody) return;

  renderTaskMonthTabs();

  // Render Active Filter Indicator Banner
  const activeFilters = [];
  if (appState.filters.project !== 'ALL') activeFilters.push(`Project: ${appState.filters.project}`);
  if (appState.filters.status !== 'ALL') activeFilters.push(`Status: ${appState.filters.status}`);
  if (appState.filters.priority !== 'ALL') activeFilters.push(`Priority: ${appState.filters.priority}`);
  if (appState.filters.category !== 'ALL') activeFilters.push(`Category: ${appState.filters.category}`);

  if (activeFilterBanner) {
    if (activeFilters.length > 0) {
      activeFilterBanner.style.display = 'flex';
      activeFilterBanner.innerHTML = `
        <div>
          <i data-lucide="filter" style="width: 16px; height: 16px; display: inline-block; vertical-align: -3px; margin-right: 6px; color: #9A3412;"></i>
          <span>${t('activeFilterText', { filterDesc: activeFilters.join(' • ') })}</span>
        </div>
        <button class="btn-action" style="padding: 4px 10px; font-size: 0.78rem; border-color: #C7D2FE;" onclick="resetAllTaskFilters()">
          <i data-lucide="x"></i> ${t('btnResetFilters')}
        </button>
      `;
    } else {
      activeFilterBanner.style.display = 'none';
      activeFilterBanner.innerHTML = '';
    }
  }

  // Filter Tasks
  let filtered = appState.tasks.filter(task => {
    // Search
    const searchVal = appState.filters.search;
    if (searchVal && !task.title.toLowerCase().includes(searchVal) && 
        !task.category.toLowerCase().includes(searchVal) &&
        !(task.project && task.project.toLowerCase().includes(searchVal)) &&
        !task.assignee.toLowerCase().includes(searchVal) &&
        !task.notes.toLowerCase().includes(searchVal)) {
      return false;
    }

    // Project Filter
    if (appState.filters.project !== 'ALL' && task.project !== appState.filters.project) {
      return false;
    }

    // Status Filter
    if (appState.filters.status !== 'ALL' && task.status !== appState.filters.status) {
      return false;
    }

    // Priority Filter
    if (appState.filters.priority !== 'ALL' && task.priority !== appState.filters.priority) {
      return false;
    }

    // Category Filter
    if (appState.filters.category !== 'ALL' && task.category !== appState.filters.category) {
      return false;
    }

    // Month Tab Filter (by Due Date's year-month)
    if (appState.filters.taskMonth && (!task.dueDate || task.dueDate.slice(0, 7) !== appState.filters.taskMonth)) {
      return false;
    }

    return true;
  });

  // Sort Tasks
  filtered.sort((a, b) => {
    switch (appState.filters.sortBy) {
      case 'dueDateAsc':
        return a.dueDate.localeCompare(b.dueDate);
      case 'dueDateDesc':
        return b.dueDate.localeCompare(a.dueDate);
      case 'priority':
        const priOrder = { 'Critical': 1, 'High': 2, 'Medium': 3, 'Low': 4 };
        return priOrder[a.priority] - priOrder[b.priority];
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination — operates on the already-filtered (month + search + all
  // dropdown filters) and already-sorted list. This only slices which rows
  // get rendered; it never touches appState.tasks itself.
  const totalFiltered = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / TASK_PAGE_SIZE));
  if (appState.taskManagementPage > totalPages) appState.taskManagementPage = totalPages;
  if (appState.taskManagementPage < 1) appState.taskManagementPage = 1;
  const pageStart = (appState.taskManagementPage - 1) * TASK_PAGE_SIZE;
  const pageItems = filtered.slice(pageStart, pageStart + TASK_PAGE_SIZE);

  if (countEl) {
    countEl.textContent = t('taskCountShowing', { filtered: pageItems.length, total: totalFiltered });
  }

  renderTaskPagination(appState.taskManagementPage, totalPages);

  const todayStr = getTodaySGTStr();

  if (totalFiltered === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; padding: 40px; color: var(--text-muted); font-weight: 700;">
          <i data-lucide="list-x" style="width:36px; height:36px; margin-bottom: 10px; opacity:0.6;"></i><br>
          ${t('emptyTable')}
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = pageItems.map(task => `
    <tr class="${task.status === 'Completed' ? 'row-completed' : ''}">
      <td style="width: 44px; text-align: center;" data-label="">
        <input type="checkbox" class="task-checkbox" ${task.status === 'Completed' ? 'checked' : ''} onchange="toggleTaskStatus('${task.id}', this.checked)">
      </td>
      <td class="task-title-cell" style="font-weight: 700; cursor: pointer;" onclick="openEditTaskModal('${task.id}')" data-label="Task">
        <div>${task.title}</div>
        ${task.notes ? `<div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500; margin-top: 2px;">${task.notes}</div>` : ''}
      </td>
      <td data-label="Project">
        <span class="badge-project badge-project-${(task.project || 'SG Project').replace(/\s+/g, '-')}">${task.project || 'SG Project'}</span>
      </td>
      <td data-label="Category">
        <span class="badge-cat badge-cat-${task.category.replace(/\s+/g, '-')}">${task.category}</span>
      </td>
      <td data-label="Priority">
        <span class="badge badge-priority-${task.priority}">${task.priority}</span>
      </td>
      <td data-label="Status">
        <select class="filter-select" style="padding: 4px 8px; font-size: 0.78rem;" onchange="updateTaskStatus('${task.id}', this.value)">
          <option value="Not Started" ${task.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
          <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Waiting" ${task.status === 'Waiting' ? 'selected' : ''}>Waiting</option>
          <option value="Review" ${task.status === 'Review' ? 'selected' : ''}>Review</option>
          <option value="On Hold" ${task.status === 'On Hold' ? 'selected' : ''}>On Hold</option>
          <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
          <option value="Cancelled" ${task.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
      <td data-label="Due Date">
        <span style="font-weight: 800; color: ${task.dueDate < todayStr && task.status !== 'Completed' && task.status !== 'Cancelled' ? '#FFAA93' : 'var(--text-main)'};">
          ${formatShortDate(task.dueDate)}
        </span>
      </td>
      <td data-label="Completion Date">
        <span style="font-weight: 700; color: ${task.completedDate ? 'var(--text-main)' : 'var(--text-light)'};">
          ${task.completedDate ? formatShortDate(task.completedDate) : '—'}
        </span>
      </td>
      <td style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);" data-label="Assignee">
        ${task.assignee || 'Jenny'}
      </td>
      <td data-label="">
        <div class="action-btn-group">
          <button class="btn-icon" title="Edit Task" onclick="openEditTaskModal('${task.id}')">
            <i data-lucide="edit-3"></i>
          </button>
          <button class="btn-icon delete" title="Delete Task" onclick="deleteTask('${task.id}')">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function resetAllTaskFilters() {
  appState.filters.project = 'ALL';
  appState.filters.status = 'ALL';
  appState.filters.priority = 'ALL';
  appState.filters.category = 'ALL';
  appState.filters.sortBy = 'dueDateAsc';
  appState.taskManagementPage = 1;
  const pf = document.getElementById('filter-project');
  const sf = document.getElementById('filter-status');
  const prf = document.getElementById('filter-priority');
  const cf = document.getElementById('filter-category');
  const srf = document.getElementById('filter-sort');
  if (pf) pf.value = 'ALL';
  if (sf) sf.value = 'ALL';
  if (prf) prf.value = 'ALL';
  if (cf) cf.value = 'ALL';
  if (srf) srf.value = 'dueDateAsc';
  renderTaskManagement();
  if (window.lucide) lucide.createIcons();
  showToast(t('toastFiltersReset'));
}
window.resetAllTaskFilters = resetAllTaskFilters;

// Filter Event Listeners for Task Management
function initTaskFilterListeners() {
  const dashProjectFilter = document.getElementById('dashboard-filter-project');
  if (dashProjectFilter) {
    dashProjectFilter.addEventListener('change', (e) => {
      appState.filters.dashboardProject = e.target.value;
      renderDashboard();
      if (window.lucide) lucide.createIcons();
      showToast(t('toastFilteredBy', { type: appState.lang === 'zh' ? '项目' : 'Project', val: e.target.value }));
    });
  }

  const projectFilter = document.getElementById('filter-project');
  const statusFilter = document.getElementById('filter-status');
  const priorityFilter = document.getElementById('filter-priority');
  const categoryFilter = document.getElementById('filter-category');
  const sortFilter = document.getElementById('filter-sort');
  const resetFilterBtn = document.getElementById('resetFiltersBtn');

  if (projectFilter) {
    projectFilter.addEventListener('change', (e) => {
      appState.filters.project = e.target.value;
      appState.taskManagementPage = 1;
      renderTaskManagement();
      if (window.lucide) lucide.createIcons();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', (e) => {
      appState.filters.status = e.target.value;
      appState.taskManagementPage = 1;
      renderTaskManagement();
      if (window.lucide) lucide.createIcons();
    });
  }

  if (priorityFilter) {
    priorityFilter.addEventListener('change', (e) => {
      appState.filters.priority = e.target.value;
      appState.taskManagementPage = 1;
      renderTaskManagement();
      if (window.lucide) lucide.createIcons();
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      appState.filters.category = e.target.value;
      appState.taskManagementPage = 1;
      renderTaskManagement();
      if (window.lucide) lucide.createIcons();
    });
  }

  if (sortFilter) {
    sortFilter.addEventListener('change', (e) => {
      appState.filters.sortBy = e.target.value;
      appState.taskManagementPage = 1;
      renderTaskManagement();
      if (window.lucide) lucide.createIcons();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      resetAllTaskFilters();
    });
  }
}

// ==========================================================================
// TASK CRUD & ACTIONS
// ==========================================================================
// Shared Completion Date logic — the single source of truth for every place
// a Task's status can change (checkbox, inline dropdown, or the edit modal).
// - Not Completed -> Completed: stamp today's date (SGT), automatically.
// - Completed -> Not Completed: clear it back to blank.
// - Any other transition (including re-saving the same status while editing
//   other fields): leave whatever Completion Date already exists untouched.
// Never invents a date for a status that was already 'Completed' coming in —
// that only happens for the legacy/migrated tasks, which correctly keep an
// empty completedDate forever unless they're actually re-toggled.
function computeCompletedDateForStatus(oldStatus, newStatus, existingCompletedDate) {
  const wasCompleted = oldStatus === 'Completed';
  const willBeCompleted = newStatus === 'Completed';
  if (!wasCompleted && willBeCompleted) return getTodaySGTStr();
  if (wasCompleted && !willBeCompleted) return '';
  return existingCompletedDate || '';
}

function applyTaskStatusChange(task, newStatus) {
  task.completedDate = computeCompletedDateForStatus(task.status, newStatus, task.completedDate);
  task.status = newStatus;
}

function toggleTaskStatus(taskId, isCompleted) {
  const task = appState.tasks.find(t => t.id === taskId);
  if (!task) return;

  applyTaskStatusChange(task, isCompleted ? 'Completed' : 'In Progress');
  saveTasksToStorage();
  if (isGoogleSheetsConnected()) syncTaskToGoogleSheets(task);
  refreshAllViews();
  showToast(t('toastStatusUpdated', { status: task.status }), 'success');
}

function updateTaskStatus(taskId, newStatus) {
  const task = appState.tasks.find(t => t.id === taskId);
  if (!task) return;

  applyTaskStatusChange(task, newStatus);
  saveTasksToStorage();
  if (isGoogleSheetsConnected()) syncTaskToGoogleSheets(task);
  refreshAllViews();
  showToast(t('toastStatusUpdated', { status: newStatus }));
}

function deleteTask(taskId) {
  const index = appState.tasks.findIndex(t => t.id === taskId);
  if (index === -1) return;

  const title = appState.tasks[index].title;
  appState.tasks.splice(index, 1);
  saveTasksToStorage();
  if (isGoogleSheetsConnected()) deleteTaskFromGoogleSheets(taskId);
  refreshAllViews();
  showToast(t('toastTaskDeleted', { title }), 'neutral');
}

// ==========================================================================
// TASK MODAL HANDLING (ADD & EDIT)
// ==========================================================================
function initModals() {
  initTaskFilterListeners();

  const addTaskBtn = document.getElementById('openAddTaskModalBtn');
  const taskModal = document.getElementById('taskModalOverlay');
  const closeTaskModalBtn = document.getElementById('closeTaskModalBtn');
  const cancelTaskBtn = document.getElementById('cancelTaskBtn');
  const taskForm = document.getElementById('taskForm');

  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
      openAddTaskModal();
    });
  }

  if (closeTaskModalBtn) {
    closeTaskModalBtn.addEventListener('click', () => {
      taskModal.classList.remove('active');
    });
  }

  if (cancelTaskBtn) {
    cancelTaskBtn.addEventListener('click', () => {
      taskModal.classList.remove('active');
    });
  }

  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveTaskFromModal();
    });
  }

  // Event Modal Handlers
  const openEventBtn = document.getElementById('openAddEventModalBtn');
  const eventModal = document.getElementById('eventModalOverlay');
  const closeEventModalBtn = document.getElementById('closeEventModalBtn');
  const cancelEventBtn = document.getElementById('cancelEventBtn');
  const eventForm = document.getElementById('eventForm');

  if (openEventBtn) {
    openEventBtn.addEventListener('click', () => {
      openAddEventModal(getTodaySGTStr());
    });
  }

  if (closeEventModalBtn) {
    closeEventModalBtn.addEventListener('click', () => {
      eventModal.classList.remove('active');
    });
  }

  if (cancelEventBtn) {
    cancelEventBtn.addEventListener('click', () => {
      eventModal.classList.remove('active');
    });
  }

  if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveEventFromModal();
    });
  }

  // Quick Add Event Form (Right Panel)
  const quickForm = document.getElementById('quickAddEventForm');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('quick-evt-title');
      const dateInput = document.getElementById('quick-evt-date');
      const timeInput = document.getElementById('quick-evt-time');
      const catInput = document.getElementById('quick-evt-cat');

      if (!titleInput.value.trim()) return;

      const newEvt = {
        id: 'evt-' + Date.now(),
        title: titleInput.value.trim(),
        date: dateInput.value || getTodaySGTStr(),
        startTime: timeInput.value || '10:00',
        endTime: '11:00',
        category: catInput.value || 'Training',
        location: 'People Growth Suite',
        description: ''
      };

      appState.events.push(newEvt);
      saveEventsToStorage();
      titleInput.value = '';
      refreshAllViews();
      showToast(t('toastEventCreated'), 'success');
    });
  }
}

function openAddTaskModal() {
  const modal = document.getElementById('taskModalOverlay');
  const titleEl = document.getElementById('taskModalTitleText');
  const form = document.getElementById('taskForm');

  if (!modal || !form) return;

  form.reset();
  document.getElementById('task-id').value = '';
  document.getElementById('task-title').value = '';
  document.getElementById('task-project').value = 'SG Project';
  document.getElementById('task-category').value = 'Training';
  document.getElementById('task-priority').value = 'High';
  document.getElementById('task-status').value = 'Not Started';
  document.getElementById('task-due-date').value = getTodaySGTStr();
  document.getElementById('task-assignee').value = 'Jenny';
  document.getElementById('task-notes').value = '';

  titleEl.textContent = t('modalTaskAddTitle');
  modal.classList.add('active');
}

function openEditTaskModal(taskId) {
  const task = appState.tasks.find(t => t.id === taskId);
  if (!task) return;

  const modal = document.getElementById('taskModalOverlay');
  const titleEl = document.getElementById('taskModalTitleText');

  document.getElementById('task-id').value = task.id;
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-project').value = task.project || 'SG Project';
  document.getElementById('task-category').value = task.category;
  document.getElementById('task-priority').value = task.priority;
  document.getElementById('task-status').value = task.status;
  document.getElementById('task-due-date').value = task.dueDate;
  document.getElementById('task-assignee').value = task.assignee || 'Jenny';
  document.getElementById('task-notes').value = task.notes || '';

  titleEl.textContent = t('modalTaskEditTitle');
  modal.classList.add('active');
}

function saveTaskFromModal() {
  const modal = document.getElementById('taskModalOverlay');
  const taskId = document.getElementById('task-id').value;
  const title = document.getElementById('task-title').value.trim();
  const project = document.getElementById('task-project').value;
  const category = document.getElementById('task-category').value;
  const priority = document.getElementById('task-priority').value;
  const status = document.getElementById('task-status').value;
  const dueDate = document.getElementById('task-due-date').value || getTodaySGTStr();
  const assignee = document.getElementById('task-assignee').value.trim() || 'Jenny';
  const notes = document.getElementById('task-notes').value.trim();

  if (!title) return;

  let savedTask = null;

  if (taskId) {
    // Edit existing task
    const index = appState.tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      const existing = appState.tasks[index];
      const completedDate = computeCompletedDateForStatus(existing.status, status, existing.completedDate);
      appState.tasks[index] = {
        ...existing,
        title,
        project,
        category,
        priority,
        status,
        dueDate,
        assignee,
        notes,
        completedDate
      };
      savedTask = appState.tasks[index];
      showToast(t('toastTaskUpdated'), 'success');
    }
  } else {
    // Create new task — starts with an empty Completion Date unless it is
    // (unusually) created directly with status = 'Completed'.
    const newTask = {
      id: 'task-' + Date.now(),
      title,
      project,
      category,
      priority,
      status,
      dueDate,
      assignee,
      notes,
      completedDate: computeCompletedDateForStatus('', status, '')
    };
    appState.tasks.unshift(newTask);
    savedTask = newTask;
    showToast(t('toastTaskCreated'), 'success');
  }

  saveTasksToStorage();
  if (savedTask && isGoogleSheetsConnected()) syncTaskToGoogleSheets(savedTask);
  modal.classList.remove('active');
  refreshAllViews();
}

// ==========================================================================
// MANAGE PROJECTS & CATEGORIES LOGIC (ADD, RENAME/EDIT, ARCHIVE, RESTORE)
// ==========================================================================
function initManagementModals() {
  // 1. Manage Projects button
  const manageProjectsBtn = document.getElementById('openManageProjectsBtn');
  const manageProjectsModal = document.getElementById('manageProjectsModalOverlay');
  const closeManageProjectsBtn = document.getElementById('closeManageProjectsModalBtn');
  const doneManageProjectsBtn = document.getElementById('doneManageProjectsBtn');
  const addProjectForm = document.getElementById('addProjectForm');

  if (manageProjectsBtn && manageProjectsModal) {
    manageProjectsBtn.addEventListener('click', () => {
      renderManageProjectsList();
      manageProjectsModal.classList.add('active');
    });
  }
  if (closeManageProjectsBtn && manageProjectsModal) {
    closeManageProjectsBtn.addEventListener('click', () => manageProjectsModal.classList.remove('active'));
  }
  if (doneManageProjectsBtn && manageProjectsModal) {
    doneManageProjectsBtn.addEventListener('click', () => manageProjectsModal.classList.remove('active'));
  }
  if (addProjectForm) {
    addProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('newProjectNameInput');
      const descInput = document.getElementById('newProjectDescInput');
      if (!nameInput.value.trim()) return;
      const name = nameInput.value.trim();
      const desc = descInput.value.trim();

      // Check for duplicates
      if (appState.projects.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        showToast(appState.lang === 'zh' ? '该项目名称已存在' : 'A project with this name already exists', 'alert');
        return;
      }

      const newProject = {
        id: 'proj-' + Date.now(),
        name,
        description: desc,
        active: true
      };
      appState.projects.push(newProject);
      saveProjectsToStorage();
      if (isGoogleSheetsConnected()) syncProjectToGoogleSheets(newProject);
      nameInput.value = '';
      descInput.value = '';
      renderManageProjectsList();
      refreshAllViews();
      showToast(t('toastProjectAdded', { name }), 'success');
    });
  }

  // 2. Manage Categories button
  const manageCategoriesBtn = document.getElementById('openManageCategoriesBtn');
  const manageCategoriesModal = document.getElementById('manageCategoriesModalOverlay');
  const closeManageCategoriesBtn = document.getElementById('closeManageCategoriesModalBtn');
  const doneManageCategoriesBtn = document.getElementById('doneManageCategoriesBtn');
  const addCategoryForm = document.getElementById('addCategoryForm');

  if (manageCategoriesBtn && manageCategoriesModal) {
    manageCategoriesBtn.addEventListener('click', () => {
      renderManageCategoriesList();
      manageCategoriesModal.classList.add('active');
    });
  }
  if (closeManageCategoriesBtn && manageCategoriesModal) {
    closeManageCategoriesBtn.addEventListener('click', () => manageCategoriesModal.classList.remove('active'));
  }
  if (doneManageCategoriesBtn && manageCategoriesModal) {
    doneManageCategoriesBtn.addEventListener('click', () => manageCategoriesModal.classList.remove('active'));
  }
  if (addCategoryForm) {
    addCategoryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('newCategoryNameInput');
      const descInput = document.getElementById('newCategoryDescInput');
      if (!nameInput.value.trim()) return;
      const name = nameInput.value.trim();
      const desc = descInput.value.trim();

      if (appState.categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        showToast(appState.lang === 'zh' ? '该类别名称已存在' : 'A category with this name already exists', 'alert');
        return;
      }

      const newCategory = {
        id: 'cat-' + Date.now(),
        name,
        description: desc,
        active: true
      };
      appState.categories.push(newCategory);
      saveCategoriesToStorage();
      if (isGoogleSheetsConnected()) syncCategoryToGoogleSheets(newCategory);
      nameInput.value = '';
      descInput.value = '';
      renderManageCategoriesList();
      refreshAllViews();
      showToast(t('toastCategoryAdded', { name }), 'success');
    });
  }

  // 3. Edit Item Modal (Rename & Description)
  const editItemModal = document.getElementById('editItemModalOverlay');
  const closeEditItemBtn = document.getElementById('closeEditItemModalBtn');
  const cancelEditItemBtn = document.getElementById('cancelEditItemBtn');
  const editItemForm = document.getElementById('editItemForm');

  if (closeEditItemBtn && editItemModal) {
    closeEditItemBtn.addEventListener('click', () => editItemModal.classList.remove('active'));
  }
  if (cancelEditItemBtn && editItemModal) {
    cancelEditItemBtn.addEventListener('click', () => editItemModal.classList.remove('active'));
  }
  if (editItemForm) {
    editItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('edit-item-type').value;
      const id = document.getElementById('edit-item-id').value;
      const oldName = document.getElementById('edit-item-oldname').value;
      const newName = document.getElementById('editItemNameInput').value.trim();
      const newDesc = document.getElementById('editItemDescInput').value.trim();

      if (!newName) return;

      if (type === 'project') {
        const proj = appState.projects.find(p => p.id === id);
        if (!proj) return;
        proj.name = newName;
        proj.description = newDesc;

        let affectedTasks = [];
        if (oldName !== newName) {
          affectedTasks = appState.tasks.filter(t => t.project === oldName);
          affectedTasks.forEach(t => { t.project = newName; });
          saveTasksToStorage();
        }
        saveProjectsToStorage();
        if (isGoogleSheetsConnected()) {
          syncProjectToGoogleSheets(proj);
          affectedTasks.forEach(taskItem => syncTaskToGoogleSheets(taskItem));
        }
        editItemModal.classList.remove('active');
        renderManageProjectsList();
        refreshAllViews();
        showToast(t('toastProjectRenamed', { oldName, newName }), 'success');
      } else if (type === 'category') {
        const cat = appState.categories.find(c => c.id === id);
        if (!cat) return;
        cat.name = newName;
        cat.description = newDesc;

        let affectedTasks = [];
        if (oldName !== newName) {
          affectedTasks = appState.tasks.filter(t => t.category === oldName);
          affectedTasks.forEach(t => { t.category = newName; });
          appState.events.forEach(e => {
            if (e.category === oldName) e.category = newName;
          });
          saveTasksToStorage();
          saveEventsToStorage();
        }
        saveCategoriesToStorage();
        if (isGoogleSheetsConnected()) {
          syncCategoryToGoogleSheets(cat);
          affectedTasks.forEach(taskItem => syncTaskToGoogleSheets(taskItem));
        }
        editItemModal.classList.remove('active');
        renderManageCategoriesList();
        refreshAllViews();
        showToast(t('toastCategoryRenamed', { oldName, newName }), 'success');
      }
    });
  }
}

function renderManageProjectsList() {
  const container = document.getElementById('manageProjectsListContainer');
  if (!container) return;

  if (appState.projects.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No projects defined</div>`;
    return;
  }

  container.innerHTML = appState.projects.map(proj => {
    const taskCount = appState.tasks.filter(t => t.project === proj.name).length;
    return `
      <div class="manage-item ${!proj.active ? 'archived' : ''}">
        <div class="manage-item-info">
          <div class="manage-item-title">
            <span>${proj.name}</span>
            <span class="badge ${proj.active ? 'positive' : 'neutral'}" style="font-size: 0.68rem; padding: 1px 6px;">
              ${proj.active ? t('statusActive') : t('statusArchived')}
            </span>
            <span class="badge neutral" style="font-size: 0.68rem; padding: 1px 6px;">
              ${t('taskCountBadge', { count: taskCount })}
            </span>
          </div>
          ${proj.description ? `<div class="manage-item-desc">${proj.description}</div>` : ''}
        </div>
        <div class="manage-item-actions">
          <button type="button" class="btn-action" style="padding: 4px 10px; font-size: 0.78rem;" onclick="openEditItemModal('project', '${proj.id}')">
            <i data-lucide="edit-3"></i> <span>${t('btnEdit')}</span>
          </button>
          <button type="button" class="btn-action" style="padding: 4px 10px; font-size: 0.78rem; ${proj.active ? 'color: #7F1D1D; border-color: #FECACA;' : 'color: #065F46; border-color: #D1FAE5;'}" onclick="toggleArchiveItem('project', '${proj.id}')">
            <i data-lucide="${proj.active ? 'archive' : 'rotate-ccw'}"></i>
            <span>${proj.active ? t('btnArchive') : t('btnRestoreItem')}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
  if (window.lucide) lucide.createIcons();
}

function renderManageCategoriesList() {
  const container = document.getElementById('manageCategoriesListContainer');
  if (!container) return;

  if (appState.categories.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">No categories defined</div>`;
    return;
  }

  container.innerHTML = appState.categories.map(cat => {
    const taskCount = appState.tasks.filter(t => t.category === cat.name).length;
    return `
      <div class="manage-item ${!cat.active ? 'archived' : ''}">
        <div class="manage-item-info">
          <div class="manage-item-title">
            <span>${cat.name}</span>
            <span class="badge ${cat.active ? 'positive' : 'neutral'}" style="font-size: 0.68rem; padding: 1px 6px;">
              ${cat.active ? t('statusActive') : t('statusArchived')}
            </span>
            <span class="badge neutral" style="font-size: 0.68rem; padding: 1px 6px;">
              ${t('taskCountBadge', { count: taskCount })}
            </span>
          </div>
          ${cat.description ? `<div class="manage-item-desc">${cat.description}</div>` : ''}
        </div>
        <div class="manage-item-actions">
          <button type="button" class="btn-action" style="padding: 4px 10px; font-size: 0.78rem;" onclick="openEditItemModal('category', '${cat.id}')">
            <i data-lucide="edit-3"></i> <span>${t('btnEdit')}</span>
          </button>
          <button type="button" class="btn-action" style="padding: 4px 10px; font-size: 0.78rem; ${cat.active ? 'color: #7F1D1D; border-color: #FECACA;' : 'color: #065F46; border-color: #D1FAE5;'}" onclick="toggleArchiveItem('category', '${cat.id}')">
            <i data-lucide="${cat.active ? 'archive' : 'rotate-ccw'}"></i>
            <span>${cat.active ? t('btnArchive') : t('btnRestoreItem')}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
  if (window.lucide) lucide.createIcons();
}

function openEditItemModal(type, id) {
  const modal = document.getElementById('editItemModalOverlay');
  const titleEl = document.getElementById('editItemModalTitleText');
  const typeInput = document.getElementById('edit-item-type');
  const idInput = document.getElementById('edit-item-id');
  const oldNameInput = document.getElementById('edit-item-oldname');
  const nameInput = document.getElementById('editItemNameInput');
  const descInput = document.getElementById('editItemDescInput');

  if (!modal) return;

  if (type === 'project') {
    const proj = appState.projects.find(p => p.id === id);
    if (!proj) return;
    titleEl.textContent = `${t('btnEdit')} Project: ${proj.name}`;
    typeInput.value = 'project';
    idInput.value = proj.id;
    oldNameInput.value = proj.name;
    nameInput.value = proj.name;
    descInput.value = proj.description || '';
  } else if (type === 'category') {
    const cat = appState.categories.find(c => c.id === id);
    if (!cat) return;
    titleEl.textContent = `${t('btnEdit')} Category: ${cat.name}`;
    typeInput.value = 'category';
    idInput.value = cat.id;
    oldNameInput.value = cat.name;
    nameInput.value = cat.name;
    descInput.value = cat.description || '';
  }

  modal.classList.add('active');
}

function toggleArchiveItem(type, id) {
  if (type === 'project') {
    const proj = appState.projects.find(p => p.id === id);
    if (!proj) return;
    if (proj.active) {
      if (!confirm(t('confirmArchiveProject', { name: proj.name }))) return;
      proj.active = false;
      showToast(t('toastProjectArchived', { name: proj.name }), 'neutral');
    } else {
      proj.active = true;
      showToast(t('toastProjectRestored', { name: proj.name }), 'success');
    }
    saveProjectsToStorage();
    if (isGoogleSheetsConnected()) syncProjectToGoogleSheets(proj);
    renderManageProjectsList();
    refreshAllViews();
  } else if (type === 'category') {
    const cat = appState.categories.find(c => c.id === id);
    if (!cat) return;
    if (cat.active) {
      if (!confirm(t('confirmArchiveCategory', { name: cat.name }))) return;
      cat.active = false;
      showToast(t('toastCategoryArchived', { name: cat.name }), 'neutral');
    } else {
      cat.active = true;
      showToast(t('toastCategoryRestored', { name: cat.name }), 'success');
    }
    saveCategoriesToStorage();
    if (isGoogleSheetsConnected()) syncCategoryToGoogleSheets(cat);
    renderManageCategoriesList();
    refreshAllViews();
  }
}

// ==========================================================================
// CALENDAR ENGINE & VIEW RENDERING
// ==========================================================================
function initCalendarControls() {
  const quickDateEl = document.getElementById('quick-evt-date');
  if (quickDateEl && !quickDateEl.value) {
    quickDateEl.value = getTodaySGTStr();
  }

  const prevBtn = document.getElementById('calPrevBtn');
  const nextBtn = document.getElementById('calNextBtn');
  const todayBtn = document.getElementById('calTodayBtn');

  const monthViewBtn = document.getElementById('view-month-btn');
  const weekViewBtn = document.getElementById('view-week-btn');
  const dayViewBtn = document.getElementById('view-day-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      navigateCalendar(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      navigateCalendar(1);
    });
  }

  if (todayBtn) {
    todayBtn.addEventListener('click', () => {
      const todayStr = getTodaySGTStr();
      appState.currentMonthDate = getTodayMonthStart();
      appState.selectedCalDate = todayStr;
      renderCalendar();
      if (window.lucide) lucide.createIcons();
    });
  }

  if (monthViewBtn) {
    monthViewBtn.addEventListener('click', () => {
      switchCalendarView('month');
    });
  }

  if (weekViewBtn) {
    weekViewBtn.addEventListener('click', () => {
      switchCalendarView('week');
    });
  }

  if (dayViewBtn) {
    dayViewBtn.addEventListener('click', () => {
      switchCalendarView('day');
    });
  }
}

function navigateCalendar(dir) {
  if (appState.calendarView === 'month') {
    appState.currentMonthDate.setMonth(appState.currentMonthDate.getMonth() + dir);
  } else if (appState.calendarView === 'week') {
    const dt = parseDateStr(appState.selectedCalDate);
    dt.setDate(dt.getDate() + (dir * 7));
    appState.selectedCalDate = formatDateStr(dt);
  } else if (appState.calendarView === 'day') {
    const dt = parseDateStr(appState.selectedCalDate);
    dt.setDate(dt.getDate() + dir);
    appState.selectedCalDate = formatDateStr(dt);
  }
  renderCalendar();
  if (window.lucide) lucide.createIcons();
}

function switchCalendarView(viewMode) {
  appState.calendarView = viewMode;
  document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`view-${viewMode}-btn`);
  if (activeBtn) activeBtn.classList.add('active');
  renderCalendar();
  if (window.lucide) lucide.createIcons();
}

// Combines WorkHub's own (localStorage-persisted) events with the in-memory-only
// Google Calendar events currently loaded for the visible date range. Google events
// are NEVER merged into appState.events / localStorage — this is purely a display-time join.
function getCombinedEventsForDate(dateStr) {
  const local = appState.events.filter(e => e.date === dateStr);
  const google = appState.google.events.filter(e => e.date === dateStr);
  return [...local, ...google];
}

function renderCalendar() {
  renderCalendarViewOnly();
  // Lazily (re)load Google Calendar events for whatever range is now visible.
  // No-op if this exact range/calendar-selection was already loaded (see refreshGoogleCalendarNow).
  if (isGoogleTokenValid()) {
    refreshGoogleCalendarNow(false);
  }
}

// Renders the calendar UI from currently-held data only (no network call).
// Used by renderCalendar() and, importantly, by the Google error handler —
// so a Google API failure re-renders safely without re-triggering the failing request.
function renderCalendarViewOnly() {
  const container = document.getElementById('calendarViewContainer');
  const headerTitle = document.getElementById('calendarMainTitleText');
  if (!container) return;

  renderCalendarSidebar();

  if (appState.calendarView === 'month') {
    renderMonthView(container, headerTitle);
  } else if (appState.calendarView === 'week') {
    renderWeekView(container, headerTitle);
  } else if (appState.calendarView === 'day') {
    renderDayView(container, headerTitle);
  }

  if (window.lucide) lucide.createIcons();
}

// 1. Month View
function renderMonthView(container, headerTitle) {
  const year = appState.currentMonthDate.getFullYear();
  const month = appState.currentMonthDate.getMonth();

  const monthNames = appState.lang === 'zh' ? 
    ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] :
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (headerTitle) {
    headerTitle.textContent = `${monthNames[month]} ${year}`;
  }

  const firstDayOfMonth = new Date(year, month, 1);
  const startDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  let html = `<div class="calendar-grid">`;
  
  const dayNames = appState.lang === 'zh' ? 
    ['日', '一', '二', '三', '四', '五', '六'] : 
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  dayNames.forEach(d => {
    html += `<div class="cal-day-header">${d}</div>`;
  });

  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    html += `
      <div class="cal-cell other-month">
        <span class="cal-day-num">${dayNum}</span>
      </div>
    `;
  }

  const todayStr = getTodaySGTStr();
  for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === appState.selectedCalDate;

    const dayEvents = getCombinedEventsForDate(dateStr);
    dayEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

    const maxDisplay = 2;
    const displayEvents = dayEvents.slice(0, maxDisplay);
    const moreCount = dayEvents.length - maxDisplay;

    html += `
      <div class="cal-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" onclick="onCalendarCellClick('${dateStr}')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="cal-day-num">${dayNum}</span>
          ${isToday ? `<span style="font-size:0.68rem; font-weight:800; color:var(--text-main); background:#FFD000; padding:1px 6px; border-radius:6px;">TODAY</span>` : ''}
        </div>
        <div style="display:flex; flex-direction:column; gap:3px; margin-top:2px; flex:1;">
          ${displayEvents.map(evt => `
            <div class="cal-event-pill badge-cat-${evt.category.replace(/\s+/g, '-')} ${evt.source === 'google' ? 'google-synced' : ''}"
                 onclick="event.stopPropagation(); openEditEventModal('${evt.id}')"
                 title="${evt.startTime} – ${evt.endTime} • ${evt.title} (${evt.location})${evt.source === 'google' ? ' [Google Calendar]' : ''}">
              ${evt.startTime} ${evt.title}
            </div>
          `).join('')}
          ${moreCount > 0 ? `
            <div class="cal-more-link" 
                 onclick="event.stopPropagation(); onCalendarMoreClick('${dateStr}')"
                 title="${appState.lang === 'zh' ? `点击查看 ${dateStr} 日的所有 ${dayEvents.length} 项日程` : `Click to view all ${dayEvents.length} events for ${dateStr}`}">
              ${appState.lang === 'zh' ? `+${moreCount} 更多` : `+${moreCount} more`}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  const totalCellsShown = startDayOfWeek + daysInMonth;
  const remainingCells = 42 - totalCellsShown;
  for (let i = 1; i <= (remainingCells > 7 ? remainingCells - 7 : remainingCells); i++) {
    html += `
      <div class="cal-cell other-month">
        <span class="cal-day-num">${i}</span>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// 2. Week View
function renderWeekView(container, headerTitle) {
  const selectedDt = parseDateStr(appState.selectedCalDate);
  const dayOfWeek = selectedDt.getDay();
  const startOfWeek = new Date(selectedDt);
  startOfWeek.setDate(selectedDt.getDate() - dayOfWeek);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  if (headerTitle) {
    headerTitle.textContent = `Week of ${formatShortDate(formatDateStr(startOfWeek))} – ${formatShortDate(formatDateStr(endOfWeek))}`;
  }

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const dt = new Date(startOfWeek);
    dt.setDate(startOfWeek.getDate() + i);
    daysOfWeek.push(formatDateStr(dt));
  }

  const dayNames = appState.lang === 'zh' ? 
    ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'] :
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const todayStr = getTodaySGTStr();
  // Wrapped in .week-view-scroll-wrapper so mobile can scroll horizontally
  // instead of squeezing all 7 day-columns into a tiny screen (style.css
  // gives the inner grid a min-width only below the mobile breakpoint).
  let html = `<div class="week-view-scroll-wrapper"><div style="display:grid; grid-template-columns: repeat(7, 1fr); gap:12px;">`;

  daysOfWeek.forEach((dateStr, idx) => {
    const isToday = dateStr === todayStr;
    const dtObj = parseDateStr(dateStr);
    const dayEvents = getCombinedEventsForDate(dateStr);
    dayEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

    html += `
      <div style="background:var(--card-bg); border:1px solid var(--card-border); border-radius:12px; padding:12px; min-height:360px; display:flex; flex-direction:column; gap:8px;">
        <div style="border-bottom:2px solid ${isToday ? '#FFD000' : 'rgba(47,0,0,0.1)'}; padding-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.75rem; font-weight:800; color:var(--text-muted); text-transform:uppercase;">${dayNames[idx]}</div>
            <div style="font-size:1.15rem; font-weight:800; color:var(--text-main);">${dtObj.getDate()}</div>
          </div>
          ${isToday ? `<span style="font-size:0.68rem; font-weight:800; background:#FFD000; color:var(--text-main); padding:2px 6px; border-radius:6px;">TODAY</span>` : ''}
        </div>
        <div style="flex:1; display:flex; flex-direction:column; gap:6px;">
          ${dayEvents.length === 0 ? `<div style="color:var(--text-muted); font-size:0.78rem; font-weight:600; text-align:center; margin-top:20px;">No events</div>` : ''}
          ${dayEvents.map(evt => `
            <div class="${evt.source === 'google' ? 'google-synced' : ''}" style="background:var(--bg-main); border-left:4px solid var(--cat-${evt.category.toLowerCase().replace(/\s+/g,'-')}, #9FBDFD); padding:8px; border-radius:6px; font-size:0.8rem; cursor:pointer;"
                 onclick="openEditEventModal('${evt.id}')">
              <div style="font-weight:800; color:var(--text-main);">${evt.startTime} - ${evt.endTime}</div>
              <div style="font-weight:700; color:var(--text-main); margin:2px 0;">${evt.title}</div>
              <div style="font-size:0.72rem; color:var(--text-muted); display:flex; align-items:center; gap:5px;">
                <span>${evt.location}</span>
                ${evt.source === 'google' ? `<span class="badge-google-source" style="font-size:0.6rem;">${t('badgeGoogleLabel')}</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        <button class="btn-action" style="width:100%; justify-content:center; padding:6px; font-size:0.75rem;" onclick="openAddEventModal('${dateStr}')">
          ${t('btnAddEvent')}
        </button>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

// 3. Day View
function renderDayView(container, headerTitle) {
  const dateStr = appState.selectedCalDate;
  const todayStr = getTodaySGTStr();
  if (headerTitle) {
    headerTitle.textContent = `${formatFullDate(dateStr)} ${dateStr === todayStr ? (appState.lang === 'zh' ? '• 今日' : '• Today') : ''}`;
  }

  const dayEvents = getCombinedEventsForDate(dateStr);
  dayEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

  let html = `
    <div class="day-view-container">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:0.95rem; font-weight:800; color:var(--text-main);">
          Schedule for ${formatDisplayDate(dateStr)}
        </span>
        <button class="btn-action btn-primary" onclick="openAddEventModal('${dateStr}')">
          <i data-lucide="plus-circle"></i> ${t('btnAddEvent')}
        </button>
      </div>
  `;

  if (dayEvents.length === 0) {
    html += `
      <div style="background:var(--card-bg); border-radius:14px; border:1px solid var(--card-border); padding:40px; text-align:center; color:var(--text-muted); font-weight:700;">
        <i data-lucide="calendar-check" style="width:36px;height:36px;margin-bottom:10px;opacity:0.6;"></i><br>
        ${t('emptyDayView')}
      </div>
    `;
  } else {
    dayEvents.forEach(evt => {
      html += `
        <div class="day-event-card" style="border-left-color: var(--cat-${evt.category.toLowerCase().replace(/\s+/g,'-')}, #FFD000);" onclick="openEditEventModal('${evt.id}')" style="cursor:pointer;">
          <div style="display:flex; gap:20px; align-items:center;">
            <div style="font-size:0.95rem; font-weight:800; color:var(--text-main); min-width:110px;">
              ${evt.startTime} – ${evt.endTime}
            </div>
            <div>
              <div style="font-size:1.05rem; font-weight:800; color:var(--text-main);">${evt.title}</div>
              <div style="font-size:0.84rem; font-weight:600; color:var(--text-muted); margin-top:3px;">
                <i data-lucide="map-pin" style="width:14px;height:14px;display:inline-block;vertical-align:-2px;"></i> ${evt.location}
              </div>
              ${evt.description ? `<div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">${evt.description}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <span class="badge-cat badge-cat-${evt.category.replace(/\s+/g, '-')}">${evt.category}</span>
            ${evt.source === 'google' ? `<span class="badge-google-source"><i data-lucide="link-2" style="width:11px;height:11px;"></i> ${t('badgeGoogleLabel')}</span>` : ''}
          </div>
        </div>
      `;
    });
  }

  html += `</div>`;
  container.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

// Right Panel: Today's Agenda & Upcoming Events
function renderCalendarSidebar() {
  const todayStr = getTodaySGTStr();
  const dateBadgeEl = document.getElementById('todayAgendaDateBadge');
  if (dateBadgeEl) {
    dateBadgeEl.textContent = formatShortDate(todayStr);
  }

  const agendaListEl = document.getElementById('todayAgendaList');
  if (agendaListEl) {
    const todayEvents = getCombinedEventsForDate(todayStr);
    todayEvents.sort((a, b) => a.startTime.localeCompare(b.startTime));

    if (todayEvents.length === 0) {
      agendaListEl.innerHTML = `<div style="color:var(--text-muted); font-size:0.82rem; font-weight:600;">${t('emptyAgenda')}</div>`;
    } else {
      agendaListEl.innerHTML = todayEvents.map(evt => `
        <div class="agenda-item" onclick="openEditEventModal('${evt.id}')" style="cursor:pointer;">
          <div class="agenda-time">${evt.startTime} – ${evt.endTime}</div>
          <div class="agenda-details">
            <div class="agenda-title">${evt.title}</div>
            <div class="agenda-meta">
              <span class="badge-cat badge-cat-${evt.category.replace(/\s+/g, '-')}" style="font-size:0.68rem; padding:1px 6px;">${evt.category}</span>
              ${evt.source === 'google' ? `<span class="badge-google-source" style="font-size:0.65rem;">${t('badgeGoogleLabel')}</span>` : ''}
              • ${evt.location}
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  const upcomingListEl = document.getElementById('upcomingEventsList');
  if (upcomingListEl) {
    // Note: appState.google.events only holds events for the currently-visible calendar
    // range (per Phase 1's "load only the visible range" requirement), so upcoming Google
    // events outside that range won't appear here until that range is viewed.
    const upcoming = [...appState.events, ...appState.google.events].filter(e => e.date >= todayStr && e.date !== todayStr);
    upcoming.sort((a, b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime));

    const next5 = upcoming.slice(0, 5);
    if (next5.length === 0) {
      upcomingListEl.innerHTML = `<div style="color:var(--text-muted); font-size:0.82rem; font-weight:600;">${t('emptyUpcoming')}</div>`;
    } else {
      upcomingListEl.innerHTML = next5.map(evt => `
        <div class="agenda-item" onclick="openEditEventModal('${evt.id}')" style="cursor:pointer;">
          <div style="width: 78px; flex-shrink: 0;">
            <span style="background:rgba(47,0,0,0.08); font-weight:800; font-size:0.75rem; color:var(--text-main); padding:2px 8px; border-radius:6px;">
              ${formatShortDate(evt.date)}
            </span>
          </div>
          <div class="agenda-details">
            <div class="agenda-title">${evt.title}</div>
            <div class="agenda-meta">
              ${evt.startTime} • ${evt.location}
              ${evt.source === 'google' ? ` • <span class="badge-google-source" style="font-size:0.62rem;">${t('badgeGoogleLabel')}</span>` : ''}
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// Calendar event/day click handlers
function onCalendarCellClick(dateStr) {
  appState.selectedCalDate = dateStr;
  openAddEventModal(dateStr);
}

function onCalendarMoreClick(dateStr) {
  appState.selectedCalDate = dateStr;
  switchCalendarView('day');
  showToast(appState.lang === 'zh' ? `已切换至 ${formatShortDate(dateStr)} 日视图` : `Switched to Day View for ${formatShortDate(dateStr)}`);
}

function openAddEventModal(dateStr) {
  const modal = document.getElementById('eventModalOverlay');
  const titleEl = document.getElementById('eventModalTitleText');
  const form = document.getElementById('eventForm');
  const deleteBtn = document.getElementById('deleteEventBtn');

  if (!modal || !form) return;

  form.reset();
  document.getElementById('event-id').value = '';
  document.getElementById('event-title').value = '';
  document.getElementById('event-date').value = dateStr || getTodaySGTStr();
  document.getElementById('event-start-time').value = '10:00';
  document.getElementById('event-end-time').value = '11:00';
  document.getElementById('event-category').value = 'Training';
  document.getElementById('event-location').value = 'People Growth Suite / Teams';
  document.getElementById('event-description').value = '';

  if (deleteBtn) deleteBtn.style.display = 'none';

  titleEl.textContent = t('modalEventAddTitle');
  modal.classList.add('active');
}

function openEditEventModal(eventId) {
  // Google Calendar events are read-only and never live in appState.events —
  // route them to the dedicated read-only details view instead of the edit form.
  if (typeof eventId === 'string' && eventId.startsWith('gcal-')) {
    showGoogleEventDetails(eventId);
    return;
  }

  const evt = appState.events.find(e => e.id === eventId);
  if (!evt) return;

  const modal = document.getElementById('eventModalOverlay');
  const titleEl = document.getElementById('eventModalTitleText');
  const deleteBtn = document.getElementById('deleteEventBtn');

  document.getElementById('event-id').value = evt.id;
  document.getElementById('event-title').value = evt.title;
  document.getElementById('event-date').value = evt.date;
  document.getElementById('event-start-time').value = evt.startTime;
  document.getElementById('event-end-time').value = evt.endTime;
  document.getElementById('event-category').value = evt.category;
  document.getElementById('event-location').value = evt.location || '';
  document.getElementById('event-description').value = evt.description || '';

  if (deleteBtn) {
    deleteBtn.style.display = 'inline-flex';
    deleteBtn.onclick = () => deleteEvent(evt.id);
  }

  titleEl.textContent = t('modalEventEditTitle');
  modal.classList.add('active');
}

function saveEventFromModal() {
  const modal = document.getElementById('eventModalOverlay');
  const eventId = document.getElementById('event-id').value;
  const title = document.getElementById('event-title').value.trim();
  const date = document.getElementById('event-date').value || getTodaySGTStr();
  const startTime = document.getElementById('event-start-time').value || '09:00';
  const endTime = document.getElementById('event-end-time').value || '10:00';
  const category = document.getElementById('event-category').value;
  const location = document.getElementById('event-location').value.trim() || 'People Growth Suite';
  const description = document.getElementById('event-description').value.trim();

  if (!title) return;

  if (eventId) {
    const index = appState.events.findIndex(e => e.id === eventId);
    if (index !== -1) {
      appState.events[index] = {
        ...appState.events[index],
        title,
        date,
        startTime,
        endTime,
        category,
        location,
        description
      };
      showToast(t('toastEventUpdated'), 'success');
    }
  } else {
    const newEvt = {
      id: 'evt-' + Date.now(),
      title,
      date,
      startTime,
      endTime,
      category,
      location,
      description
    };
    appState.events.push(newEvt);
    showToast(t('toastEventCreated'), 'success');
  }

  saveEventsToStorage();
  modal.classList.remove('active');
  refreshAllViews();
}

function deleteEvent(eventId) {
  const index = appState.events.findIndex(e => e.id === eventId);
  if (index === -1) return;

  const title = appState.events[index].title;
  appState.events.splice(index, 1);
  saveEventsToStorage();
  
  const modal = document.getElementById('eventModalOverlay');
  if (modal) modal.classList.remove('active');

  refreshAllViews();
  showToast(t('toastEventDeleted', { title }), 'neutral');
}

// ==========================================================================
// EXPORT & SAMPLE ANALYTICS GENERATION (EXCEL .XLSX & PDF EXECUTIVE REPORT)
// ==========================================================================
function exportAsExcel() {
  const todayStr = getTodaySGTStr();

  // 1. Format Tasks array for sheet
  const tasksSheetData = appState.tasks.map(t => ({
    "Task ID": t.id,
    "Title": t.title,
    "Project": t.project || 'SG Project',
    "Category": t.category,
    "Priority": t.priority,
    "Status": t.status,
    "Due Date": formatShortDate(t.dueDate),
    "Assignee": t.assignee || 'Jenny',
    "Notes": t.notes || ''
  }));

  // 2. Format Events array for sheet
  const eventsSheetData = appState.events.map(e => ({
    "Event ID": e.id,
    "Event Title": e.title,
    "Date": formatShortDate(e.date),
    "Start Time": e.startTime,
    "End Time": e.endTime,
    "Category": e.category,
    "Location": e.location || '',
    "Description": e.description || ''
  }));

  if (typeof XLSX !== 'undefined') {
    const wb = XLSX.utils.book_new();
    const wsTasks = XLSX.utils.json_to_sheet(tasksSheetData);
    const wsEvents = XLSX.utils.json_to_sheet(eventsSheetData);

    XLSX.utils.book_append_sheet(wb, wsTasks, "Tasks");
    XLSX.utils.book_append_sheet(wb, wsEvents, "Calendar Events");

    XLSX.writeFile(wb, `WorkHub_Jenny_Export_${todayStr}.xlsx`);
  } else {
    // Fallback if CDN offline: export CSV
    let csvContent = "data:text/csv;charset=utf-8,Task ID,Title,Project,Category,Priority,Status,Due Date,Assignee,Notes\n";
    tasksSheetData.forEach(row => {
      csvContent += `"${row["Task ID"]}","${row["Title"].replace(/"/g, '""')}","${row["Project"]}","${row["Category"]}","${row["Priority"]}","${row["Status"]}","${row["Due Date"]}","${row["Assignee"]}","${row["Notes"].replace(/"/g, '""')}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `WorkHub_Jenny_Export_${todayStr}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  const exportModal = document.getElementById('exportModalOverlay');
  if (exportModal) exportModal.classList.remove('active');
  showToast(t('toastExportExcelSuccess'), 'success');
}

function exportAsPDF() {
  const todayStr = getTodaySGTStr();
  const formattedToday = formatShortDate(todayStr);

  const reportEl = document.createElement('div');
  reportEl.style.padding = '24px';
  reportEl.style.fontFamily = `'Microsoft YaHei UI', sans-serif`;
  reportEl.style.color = '#2F0000';
  reportEl.innerHTML = `
    <div style="border-bottom: 3px solid #FFD000; padding-bottom: 14px; margin-bottom: 20px;">
      <h1 style="font-size: 22px; font-weight: 800; margin: 0 0 6px 0;">WorkHub People Growth & Development Report</h1>
      <div style="font-size: 13px; color: #737373;">
        Profile: <b>Jenny (People Growth & Development)</b> • Generated: <b>${formattedToday} (SGT)</b>
      </div>
    </div>

    <!-- KPI Summary Row -->
    <div style="display: flex; gap: 14px; margin-bottom: 24px;">
      <div style="flex: 1; background: #FAFAFA; padding: 12px; border-radius: 8px; border: 1px solid #E5ECF8;">
        <div style="font-size: 11px; color: #737373; font-weight: 700;">TOTAL TASKS</div>
        <div style="font-size: 22px; font-weight: 800;">${appState.tasks.length}</div>
      </div>
      <div style="flex: 1; background: #FAFAFA; padding: 12px; border-radius: 8px; border: 1px solid #9FBDFD;">
        <div style="font-size: 11px; color: #737373; font-weight: 700;">OPEN TASKS</div>
        <div style="font-size: 22px; font-weight: 800;">${appState.tasks.filter(t => t.status !== 'Completed' && t.status !== 'Cancelled').length}</div>
      </div>
      <div style="flex: 1; background: #FAFAFA; padding: 12px; border-radius: 8px; border: 1px solid #FFF3A4;">
        <div style="font-size: 11px; color: #737373; font-weight: 700;">COMPLETED</div>
        <div style="font-size: 22px; font-weight: 800;">${appState.tasks.filter(t => t.status === 'Completed').length}</div>
      </div>
    </div>

    <h2 style="font-size: 16px; font-weight: 800; margin: 20px 0 10px 0;">Task Repository (${appState.tasks.length} Tasks)</h2>
    <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 24px;">
      <thead>
        <tr style="background: #E5ECF8; text-align: left;">
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Task Title</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Project</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Category</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Priority</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Status</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Due Date</th>
        </tr>
      </thead>
      <tbody>
        ${appState.tasks.map(t => `
          <tr>
            <td style="padding: 6px; border: 1px solid #E5E7EB; font-weight: 700;">${t.title}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${t.project || 'SG Project'}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${t.category}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${t.priority}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${t.status}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${formatShortDate(t.dueDate)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <h2 style="font-size: 16px; font-weight: 800; margin: 20px 0 10px 0;">Calendar Schedule (${appState.events.length} Events)</h2>
    <table style="width: 100%; border-collapse: collapse; font-size: 11px;">
      <thead>
        <tr style="background: #EFDFD8; text-align: left;">
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Event Title</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Date</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Time</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Category</th>
          <th style="padding: 6px; border: 1px solid #D1D5DB;">Location</th>
        </tr>
      </thead>
      <tbody>
        ${appState.events.map(e => `
          <tr>
            <td style="padding: 6px; border: 1px solid #E5E7EB; font-weight: 700;">${e.title}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${formatShortDate(e.date)}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${e.startTime} – ${e.endTime}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${e.category}</td>
            <td style="padding: 6px; border: 1px solid #E5E7EB;">${e.location || ''}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  if (typeof html2pdf !== 'undefined') {
    const opt = {
      margin: 10,
      filename: `WorkHub_Jenny_Export_${todayStr}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(reportEl).save();
  } else {
    // Fallback if CDN is unreachable: open print window
    const printWin = window.open('', '_blank');
    printWin.document.write(`<html><head><title>WorkHub PDF Report</title></head><body>${reportEl.innerHTML}</body></html>`);
    printWin.document.close();
    printWin.print();
  }

  const exportModal = document.getElementById('exportModalOverlay');
  if (exportModal) exportModal.classList.remove('active');
  showToast(t('toastExportPDFSuccess'), 'success');
}

// ==========================================================================
// REPORTS PAGE - LIVE ANALYTICS (Computed from Real Task & Calendar Data)
// ==========================================================================
function renderReportsAnalytics() {
  const tasks = appState.tasks;
  const events = appState.events;
  const todayStr = getTodaySGTStr();
  const todayDate = parseDateStr(todayStr);

  // ---- Metric 1: On-Time Task Resolution ----
  // "Active" = not Cancelled. On-track = active tasks that are not overdue (includes Completed + open-not-overdue).
  const activeTasks = tasks.filter(tk => tk.status !== 'Cancelled');
  const overdueActive = activeTasks.filter(tk => tk.status !== 'Completed' && tk.dueDate < todayStr);
  const onTrackCount = activeTasks.length - overdueActive.length;
  const onTimeRate = activeTasks.length > 0 ? Math.round((onTrackCount / activeTasks.length) * 100) : null;

  const onTimeValueEl = document.getElementById('rep-ontime-value');
  const onTimeSubEl = document.getElementById('rep-ontime-subtext');
  if (onTimeValueEl) onTimeValueEl.textContent = onTimeRate === null ? '--%' : `${onTimeRate}%`;
  if (onTimeSubEl) {
    onTimeSubEl.innerHTML = activeTasks.length > 0
      ? `<span>${t('repOnTimeSub', { count: onTrackCount, total: activeTasks.length })}</span>`
      : `<span>${t('repOnTimeSubNoTasks')}</span>`;
  }

  // ---- Metric 2: Training & Sync Load (this week's Training + Meeting event hours) ----
  const weekStart = new Date(todayDate);
  const dayOfWeek = weekStart.getDay(); // 0 = Sunday
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  weekStart.setDate(weekStart.getDate() + mondayOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const weekStartStr = formatDateStr(weekStart);
  const weekEndStr = formatDateStr(weekEnd);

  const thisWeekTrainingEvents = events.filter(ev =>
    (ev.category === 'Training' || ev.category === 'Meeting') &&
    ev.date >= weekStartStr && ev.date <= weekEndStr
  );
  const trainingHours = thisWeekTrainingEvents.reduce((sum, ev) => {
    const [sh, sm] = (ev.startTime || '00:00').split(':').map(Number);
    const [eh, em] = (ev.endTime || '00:00').split(':').map(Number);
    let mins = (eh * 60 + em) - (sh * 60 + sm);
    if (mins < 0) mins = 0;
    return sum + (mins / 60);
  }, 0);

  const trainingValueEl = document.getElementById('rep-trainingload-value');
  const trainingSubEl = document.getElementById('rep-trainingload-subtext');
  if (trainingValueEl) trainingValueEl.textContent = `${trainingHours.toFixed(1)} hrs`;
  if (trainingSubEl) trainingSubEl.innerHTML = `<span>${t('repTrainingLoadSub', { count: thisWeekTrainingEvents.length })}</span>`;

  // ---- Metric 3: Critical & High Priority Load ----
  const criticalHighCount = tasks.filter(tk => tk.priority === 'Critical' || tk.priority === 'High').length;
  const criticalPct = tasks.length > 0 ? Math.round((criticalHighCount / tasks.length) * 100) : 0;

  const critValueEl = document.getElementById('rep-criticalload-value');
  const critSubEl = document.getElementById('rep-criticalload-subtext');
  if (critValueEl) critValueEl.textContent = `${criticalHighCount}`;
  if (critSubEl) critSubEl.innerHTML = `<span>${t('repCriticalLoadSub', { pct: criticalPct })}</span>`;

  // ---- Metric 4: Project Alignment (average on-track rate across active projects) ----
  const activeProjects = appState.projects.filter(p => p.active);
  let alignmentRate = null;
  if (activeProjects.length > 0) {
    const rates = activeProjects.map(proj => {
      const projTasks = tasks.filter(tk => (tk.project || 'SG Project') === proj.name && tk.status !== 'Cancelled');
      if (projTasks.length === 0) return null;
      const projOverdue = projTasks.filter(tk => tk.status !== 'Completed' && tk.dueDate < todayStr).length;
      return ((projTasks.length - projOverdue) / projTasks.length) * 100;
    }).filter(r => r !== null);
    alignmentRate = rates.length > 0 ? Math.round(rates.reduce((a, b) => a + b, 0) / rates.length) : null;
  }

  const alignValueEl = document.getElementById('rep-alignment-value');
  const alignSubEl = document.getElementById('rep-alignment-subtext');
  if (alignValueEl) alignValueEl.textContent = alignmentRate === null ? '--%' : `${alignmentRate}%`;
  if (alignSubEl) {
    alignSubEl.innerHTML = activeProjects.length > 0
      ? `<span>${t('repAlignmentSub', { count: activeProjects.length })}</span>`
      : `<span>${t('repAlignmentSubNoProjects')}</span>`;
  }

  // ---- Chart 1: Task Due-Date Load (Next 6 Weeks, bar chart) ----
  renderReportsWeeklyLoadChart(tasks, weekStart);

  // ---- Panel 2: Project & Category Attainment (computed progress bars) ----
  renderReportsAttainmentBars(tasks);
}

function renderReportsWeeklyLoadChart(tasks, currentWeekStart) {
  if (typeof Chart === 'undefined') return;
  const canvas = document.getElementById('reportsWeeklyLoadChart');
  if (!canvas) return;

  const weekLabels = [];
  const weekCounts = [];
  for (let i = 0; i < 6; i++) {
    const wStart = new Date(currentWeekStart);
    wStart.setDate(wStart.getDate() + (i * 7));
    const wEnd = new Date(wStart);
    wEnd.setDate(wEnd.getDate() + 6);
    const wStartStr = formatDateStr(wStart);
    const wEndStr = formatDateStr(wEnd);

    const count = tasks.filter(tk => tk.dueDate >= wStartStr && tk.dueDate <= wEndStr && tk.status !== 'Cancelled').length;
    weekLabels.push(formatShortDate(wStartStr));
    weekCounts.push(count);
  }

  if (appState.chartInstances.reportsWeeklyChart) {
    appState.chartInstances.reportsWeeklyChart.destroy();
  }

  appState.chartInstances.reportsWeeklyChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: weekLabels,
      datasets: [{
        label: appState.lang === 'zh' ? '到期任务数' : 'Tasks Due',
        data: weekCounts,
        backgroundColor: weekCounts.map((_, i) => {
          const opacities = [1, 0.88, 0.76, 0.64, 0.52, 0.4];
          return `rgba(159, 189, 253, ${opacities[i % opacities.length]})`;
        }),
        borderColor: '#7DA0E8',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#2F0000',
          titleFont: { family: 'Microsoft YaHei UI', weight: '800' },
          bodyFont: { family: 'Microsoft YaHei UI' },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            title: (items) => t('repWeeklyChartWeekLabel', { date: items[0].label }),
            label: (item) => t('tooltipTaskCount', { count: item.raw })
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#2F0000', font: { family: 'Microsoft YaHei UI', size: 11, weight: '700' } }
        },
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, color: '#2F0000', font: { family: 'Microsoft YaHei UI', size: 11, weight: '700' } },
          grid: { color: 'rgba(47,0,0,0.06)' }
        }
      }
    }
  });
}

function renderReportsAttainmentBars(tasks) {
  const container = document.getElementById('reportsAttainmentContainer');
  if (!container) return;

  const barColors = ['#9FBDFD', '#FFF3A4', '#FFAA93', '#E5ECF8', '#CFCFCF', '#F6B8D0'];
  const rows = [];

  // One row per active project
  const activeProjects = appState.projects.filter(p => p.active);
  activeProjects.forEach((proj, i) => {
    const projTasks = tasks.filter(tk => (tk.project || 'SG Project') === proj.name);
    const completed = projTasks.filter(tk => tk.status === 'Completed').length;
    const rate = projTasks.length > 0 ? Math.round((completed / projTasks.length) * 100) : null;
    rows.push({
      label: proj.name,
      rate,
      taskCount: projTasks.length,
      color: barColors[i % barColors.length]
    });
  });

  // One row per active category
  const activeCategories = appState.categories.filter(c => c.active);
  activeCategories.forEach((cat, i) => {
    const catTasks = tasks.filter(tk => tk.category === cat.name);
    const completed = catTasks.filter(tk => tk.status === 'Completed').length;
    const rate = catTasks.length > 0 ? Math.round((completed / catTasks.length) * 100) : null;
    rows.push({
      label: cat.name,
      rate,
      taskCount: catTasks.length,
      color: barColors[(activeProjects.length + i) % barColors.length]
    });
  });

  container.innerHTML = rows.map(row => `
    <div>
      <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.85rem; margin-bottom: 4px;">
        <span>${row.label}</span>
        <span>${row.rate === null ? t('repAttainmentNoTasks') : `${row.rate}% &middot; ${t('repAttainmentTasksLabel', { count: row.taskCount })}`}</span>
      </div>
      <div style="height: 10px; background: #EEE; border-radius: 6px; overflow: hidden;">
        <div style="width: ${row.rate === null ? 0 : row.rate}%; height: 100%; background: ${row.color};"></div>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// GOOGLE CALENDAR INTEGRATION — Phase 1 (READ-ONLY)
// Google Identity Services (GIS) browser OAuth token flow. No backend, no
// Client Secret in this frontend. WorkHub can only READ Google Calendar
// events — it never creates/edits/deletes anything on Google Calendar, and
// Google event data is NEVER written into WorkHub's localStorage (Tasks and
// WorkHub-native Events are completely separate from Google Calendar data).
// ==========================================================================

// Minimal required scope — read-only calendar access only, nothing more.
const GOOGLE_CALENDAR_SCOPE = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_SELECTED_CALENDARS_KEY = 'workhub_google_selected_calendars';

function initGoogleCalendarIntegration() {
  appState.google.isFileProtocol = (window.location.protocol === 'file:');

  const connectBtn = document.getElementById('googleCalConnectBtn');
  const headerDisconnectBtn = document.getElementById('googleCalHeaderDisconnectBtn');
  const modal = document.getElementById('googleCalModalOverlay');
  const closeBtn = document.getElementById('closeGoogleCalModalBtn');
  const closeFooterBtn = document.getElementById('closeGoogleCalModalFooterBtn');
  const saveIdBtn = document.getElementById('saveGoogleClientIdBtn');
  const clientIdInput = document.getElementById('googleClientIdInput');
  const authBtn = document.getElementById('googleCalAuthBtn');
  const refreshBtn = document.getElementById('googleCalSyncNowBtn');
  const disconnectBtn = document.getElementById('googleCalDisconnectBtn');
  const detailsCloseBtn = document.getElementById('closeGoogleEventModalBtn');
  const detailsCloseFooterBtn = document.getElementById('closeGoogleEventModalFooterBtn');

  if (clientIdInput && appState.google.clientId) {
    clientIdInput.value = appState.google.clientId;
  }

  if (connectBtn) {
    connectBtn.addEventListener('click', () => {
      if (appState.google.isFileProtocol) {
        showToast(t('gcalFileProtocolWarning'), 'alert');
        return;
      }
      updateGoogleCalModalUI();
      if (modal) modal.classList.add('active');
    });
  }

  if (headerDisconnectBtn) {
    headerDisconnectBtn.addEventListener('click', () => {
      disconnectGoogleCalendar();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', () => modal.classList.remove('active'));

  if (saveIdBtn) {
    saveIdBtn.addEventListener('click', () => {
      const val = (clientIdInput.value || '').trim();
      if (!val) {
        showToast(t('gcalInvalidClientId'), 'alert');
        return;
      }
      appState.google.clientId = val;
      localStorage.setItem('workhub_google_client_id', val);
      appState.google.tokenClient = null; // force re-init with new client id
      showToast(t('gcalClientIdSaved'), 'success');
      updateGoogleCalModalUI();
    });
  }

  if (authBtn) {
    authBtn.addEventListener('click', () => {
      if (appState.google.isFileProtocol) {
        showToast(t('gcalFileProtocolWarning'), 'alert');
        return;
      }
      handleGoogleConnectClick();
    });
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      refreshGoogleCalendarNow(true);
    });
  }

  if (disconnectBtn) {
    disconnectBtn.addEventListener('click', () => {
      disconnectGoogleCalendar();
    });
  }

  if (detailsCloseBtn) {
    detailsCloseBtn.addEventListener('click', () => closeGoogleEventDetailsModal());
  }
  if (detailsCloseFooterBtn) {
    detailsCloseFooterBtn.addEventListener('click', () => closeGoogleEventDetailsModal());
  }

  updateGoogleCalModalUI();
  updateGoogleConnectBtnLabel();

  // Try to silently restore the previous Google Calendar connection (no popup).
  // Only runs if the user has connected before and hasn't disconnected since.
  attemptSilentGoogleReconnectWhenReady();
}

function isGoogleTokenValid() {
  return !!(appState.google.accessToken && appState.google.tokenExpiryMs && Date.now() < appState.google.tokenExpiryMs);
}

function updateGoogleConnectBtnLabel() {
  const btnText = document.getElementById('googleCalConnectBtnText');
  const headerDisconnectBtn = document.getElementById('googleCalHeaderDisconnectBtn');
  if (btnText) {
    if (isGoogleTokenValid()) {
      btnText.textContent = t('gcalConnectedBtn');
    } else if (appState.google.everConnected) {
      // Previously connected, but no valid token right now (expired / silent
      // restore failed) — invite the user to re-authorize rather than implying
      // this is a brand-new connection.
      btnText.textContent = t('gcalReconnectBtn');
    } else {
      btnText.textContent = t('gcalConnectBtnLabel');
    }
  }
  if (headerDisconnectBtn) {
    headerDisconnectBtn.style.display = isGoogleTokenValid() ? 'inline-flex' : 'none';
  }
}

// ---- Automatic reconnect on startup (no localStorage token, no client secret) ----
//
// WorkHub never persists the Google access token or client secret. Instead it
// remembers only a boolean ("has this browser connected before?") and, on load,
// asks Google Identity Services for a token with prompt:'none' — which succeeds
// silently ONLY if the browser still has an active Google session and previously
// granted consent for this scope. If that fails for any reason (signed out,
// consent revoked, GIS not loaded yet, popup blocked, offline, etc.) WorkHub
// simply falls back to showing "Reconnect Google Calendar" — it never shows an
// error and never opens a popup on the user's behalf.
function attemptSilentGoogleReconnectWhenReady(attemptsLeft = 25) {
  if (appState.google.isFileProtocol) return;      // file:// can't do Google OAuth at all
  if (!appState.google.everConnected) return;      // never connected before -> show normal Connect button
  if (isGoogleTokenValid()) return;                // already have a valid in-memory token

  const gisReady = (typeof google !== 'undefined' && google.accounts && google.accounts.oauth2);
  if (!gisReady) {
    // The GIS script tag is async/defer, so it may not have loaded yet at
    // DOMContentLoaded. Poll briefly (~5s total), then give up quietly.
    if (attemptsLeft > 0) {
      setTimeout(() => attemptSilentGoogleReconnectWhenReady(attemptsLeft - 1), 200);
    }
    return;
  }

  attemptSilentGoogleReconnect();
}

// onExpiryRetryFailed is optional: pass it when this silent attempt is a
// mid-session retry after a 401 (see handleGoogleApiError) rather than the
// normal startup attempt, so the caller can react (clear stale events, show
// the "reconnect" toast) only once the silent retry has actually failed —
// never before, so a successful silent refresh never bothers the user.
function attemptSilentGoogleReconnect(onExpiryRetryFailed) {
  if (isGoogleTokenValid() || appState.google.autoConnectInProgress) {
    if (onExpiryRetryFailed) onExpiryRetryFailed();
    return;
  }
  const client = ensureGoogleTokenClient(/* silent */ true);
  if (!client) {
    // Missing/invalid client id, or GIS unavailable — fail quietly, no toast.
    updateGoogleConnectBtnLabel();
    updateGoogleCalModalUI();
    if (onExpiryRetryFailed) onExpiryRetryFailed();
    return;
  }
  appState.google.expiryRetryFailureCallback = onExpiryRetryFailed || null;
  appState.google.autoConnectInProgress = true;
  try {
    client.requestAccessToken({ prompt: 'none' });
  } catch (err) {
    console.warn('Silent Google reconnect failed to start:', err);
    appState.google.autoConnectInProgress = false;
    updateGoogleConnectBtnLabel();
    updateGoogleCalModalUI();
    appState.google.expiryRetryFailureCallback = null;
    if (onExpiryRetryFailed) onExpiryRetryFailed();
  }
}

function updateGoogleCalModalUI() {
  const statusIcon = document.getElementById('googleCalStatusIcon');
  const statusText = document.getElementById('googleCalStatusText');
  const syncRow = document.getElementById('googleCalSyncRow');
  const authBtnText = document.getElementById('googleCalAuthBtnText');

  if (isGoogleTokenValid()) {
    if (statusIcon) statusIcon.setAttribute('data-lucide', 'check-circle-2');
    if (statusText) statusText.textContent = t('gcalStatusConnected');
    if (syncRow) syncRow.style.display = 'flex';
    if (authBtnText) authBtnText.textContent = t('gcalReconnectBtn');
  } else {
    if (statusIcon) statusIcon.setAttribute('data-lucide', 'circle-slash');
    if (statusText) statusText.textContent = t('gcalStatusNotConnected');
    if (syncRow) syncRow.style.display = 'none';
    if (authBtnText) authBtnText.textContent = t('gcalConnectBtnShort');
  }

  renderGoogleCalendarListUI();
  if (window.lucide) lucide.createIcons();
}

function ensureGoogleTokenClient(silent = false) {
  if (!appState.google.clientId) {
    if (!silent) showToast(t('gcalInvalidClientId'), 'alert');
    return null;
  }
  if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
    if (!silent) showToast(t('gcalLibraryNotLoaded'), 'alert');
    return null;
  }
  if (!appState.google.tokenClient) {
    appState.google.tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: appState.google.clientId,
      scope: GOOGLE_CALENDAR_SCOPE,
      callback: onGoogleTokenResponse,
      error_callback: onGoogleAuthError
    });
  }
  return appState.google.tokenClient;
}

function handleGoogleConnectClick() {
  const client = ensureGoogleTokenClient();
  if (!client) return;
  try {
    client.requestAccessToken({ prompt: isGoogleTokenValid() ? '' : 'consent' });
  } catch (err) {
    console.error('Google requestAccessToken threw:', err);
    showToast(t('gcalAuthFailed'), 'alert');
  }
}

// Handles user-cancelled login, blocked popups, and other GIS-level failures
// that never reach the normal token callback. Never lets these crash the page.
function onGoogleAuthError(err) {
  console.warn('Google auth error:', err);
  const wasSilentAttempt = appState.google.autoConnectInProgress;
  appState.google.autoConnectInProgress = false;

  if (wasSilentAttempt) {
    // A background auto-reconnect attempt failed (no active Google session,
    // consent no longer valid, popup blocked, offline, etc). This is expected
    // and must never surface as an error — just fall back to "Reconnect".
    updateGoogleConnectBtnLabel();
    updateGoogleCalModalUI();
    const cb = appState.google.expiryRetryFailureCallback;
    appState.google.expiryRetryFailureCallback = null;
    if (cb) cb();
    return;
  }

  const type = err && err.type;
  if (type === 'popup_closed') {
    showToast(t('gcalPopupClosed'), 'default');
  } else if (type === 'popup_failed_to_open') {
    showToast(t('gcalPopupBlocked'), 'alert');
  } else {
    showToast(t('gcalAuthFailed'), 'alert');
  }
  updateGoogleConnectBtnLabel();
  updateGoogleCalModalUI();
}

function onGoogleTokenResponse(tokenResponse) {
  const wasSilentAttempt = appState.google.autoConnectInProgress;
  appState.google.autoConnectInProgress = false;

  if (!tokenResponse || tokenResponse.error) {
    if (wasSilentAttempt) {
      // Silent restore didn't succeed — fall back quietly to "Reconnect Google
      // Calendar" without ever showing an error toast on startup.
      updateGoogleConnectBtnLabel();
      updateGoogleCalModalUI();
      const cb = appState.google.expiryRetryFailureCallback;
      appState.google.expiryRetryFailureCallback = null;
      if (cb) cb();
      return;
    }
    const errCode = tokenResponse && tokenResponse.error;
    if (errCode === 'access_denied') {
      showToast(t('gcalAuthDenied'), 'alert');
    } else {
      showToast(t('gcalAuthFailed'), 'alert');
    }
    updateGoogleConnectBtnLabel();
    updateGoogleCalModalUI();
    return;
  }

  appState.google.accessToken = tokenResponse.access_token;
  appState.google.tokenExpiryMs = Date.now() + ((tokenResponse.expires_in || 3600) * 1000) - 5000;
  appState.google.lastFetchKey = null; // force a fresh fetch now that we (re)connected
  appState.google.expiryRetryFailureCallback = null; // reconnected — no failure callback to run

  // Remember (boolean only, never the token) that this browser has connected
  // successfully, so a future page load knows it's worth attempting a silent
  // reconnect. This is intentionally the ONLY thing about Google auth WorkHub
  // persists to localStorage.
  appState.google.everConnected = true;
  localStorage.setItem('workhub_google_ever_connected', 'true');

  updateGoogleConnectBtnLabel();
  updateGoogleCalModalUI();
  if (!wasSilentAttempt) showToast(t('gcalConnectSuccess'), 'success');

  loadGoogleCalendarListThenEvents();
}

// Disconnecting only clears Google OAuth/session state. WorkHub's own Tasks
// and Events (localStorage) are never touched here — they were never mixed
// with Google data in the first place.
function disconnectGoogleCalendar() {
  const token = appState.google.accessToken;
  if (token && typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
    try { google.accounts.oauth2.revoke(token, () => {}); } catch (e) { /* ignore */ }
  }
  appState.google.accessToken = null;
  appState.google.tokenExpiryMs = null;
  appState.google.calendars = [];
  appState.google.events = [];
  appState.google.lastFetchKey = null;
  appState.google.autoConnectInProgress = false;
  // appState.google.selectedCalendarIds is intentionally left in localStorage as a
  // remembered preference, so reconnecting later restores the same calendar selection.

  // Clear the "ever connected" flag so WorkHub does NOT try to silently
  // reconnect on the next page load — the user must click Connect again.
  appState.google.everConnected = false;
  localStorage.removeItem('workhub_google_ever_connected');

  updateGoogleConnectBtnLabel();
  updateGoogleCalModalUI();
  renderCalendarViewOnly();
  showToast(t('gcalDisconnected'), 'default');
}

// After connecting, load the user's calendar list first (for the "My Calendars"
// picker), then load events for whatever range is currently visible.
async function loadGoogleCalendarListThenEvents() {
  try {
    await fetchGoogleCalendarList();
    renderGoogleCalendarListUI();
    await refreshGoogleCalendarNow(true);
  } catch (err) {
    handleGoogleApiError(err);
  }
}

async function fetchGoogleCalendarList() {
  let resp;
  try {
    resp = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList?maxResults=250', {
      headers: { Authorization: `Bearer ${appState.google.accessToken}` }
    });
  } catch (networkErr) {
    const e = new Error('network_error'); e.type = 'network_error'; throw e;
  }
  if (resp.status === 401) { const e = new Error('token_expired'); e.type = 'auth_expired'; throw e; }
  if (!resp.ok) { const e = new Error('api_error'); e.type = 'api_error'; e.status = resp.status; throw e; }

  const data = await resp.json();
  const items = data.items || [];
  appState.google.calendars = items.map(c => ({
    id: c.id,
    summary: c.summaryOverride || c.summary || c.id,
    primary: !!c.primary,
    backgroundColor: c.backgroundColor || '#9FBDFD'
  }));

  // Restore any previously-remembered calendar selection (filtered to calendars that
  // still exist); default to the primary calendar only if there's no valid selection yet.
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(GOOGLE_SELECTED_CALENDARS_KEY) || '[]'); } catch (e) { saved = []; }
  const validIds = new Set(appState.google.calendars.map(c => c.id));
  let selected = saved.filter(id => validIds.has(id));
  if (selected.length === 0) {
    const primaryCal = appState.google.calendars.find(c => c.primary);
    selected = primaryCal ? [primaryCal.id] : (appState.google.calendars[0] ? [appState.google.calendars[0].id] : []);
  }
  appState.google.selectedCalendarIds = selected;
  localStorage.setItem(GOOGLE_SELECTED_CALENDARS_KEY, JSON.stringify(selected));
}

// Renders the "My Calendars" checklist inside the Connect modal (Requirement #9).
function renderGoogleCalendarListUI() {
  const container = document.getElementById('googleCalCalendarListContainer');
  const section = document.getElementById('googleCalCalendarListSection');
  if (!container || !section) return;

  if (!isGoogleTokenValid() || appState.google.calendars.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = 'block';

  if (appState.google.calendars.length === 0) {
    container.innerHTML = `<div style="color:var(--text-muted); font-size:0.82rem; font-weight:600; padding:8px;">${t('gcalNoCalendars')}</div>`;
    return;
  }

  container.innerHTML = appState.google.calendars.map(cal => {
    const checked = appState.google.selectedCalendarIds.includes(cal.id) ? 'checked' : '';
    return `
      <label class="manage-item" style="cursor:pointer;">
        <div class="manage-item-info">
          <div class="manage-item-title">
            <span style="width:10px; height:10px; border-radius:50%; background:${cal.backgroundColor}; display:inline-block; flex-shrink:0;"></span>
            <span>${cal.summary}</span>
            ${cal.primary ? `<span style="font-size:0.7rem; font-weight:600; color:var(--text-muted);">(${t('gcalPrimaryLabel')})</span>` : ''}
          </div>
        </div>
        <input type="checkbox" class="task-checkbox" data-cal-id="${cal.id}" ${checked} onchange="onGoogleCalendarToggle('${cal.id}', this.checked)">
      </label>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function onGoogleCalendarToggle(calId, isChecked) {
  const set = new Set(appState.google.selectedCalendarIds);
  if (isChecked) set.add(calId); else set.delete(calId);
  appState.google.selectedCalendarIds = Array.from(set);
  localStorage.setItem(GOOGLE_SELECTED_CALENDARS_KEY, JSON.stringify(appState.google.selectedCalendarIds));
  refreshGoogleCalendarNow(true);
}

// Computes the date range to load Google events for, based on the calendar view
// currently on screen (Requirement #4 — only the visible range, never years of data).
function getCurrentGoogleViewDateRange() {
  if (appState.calendarView === 'month') {
    const year = appState.currentMonthDate.getFullYear();
    const month = appState.currentMonthDate.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    return { startStr: formatDateStr(first), endStr: formatDateStr(last) };
  } else if (appState.calendarView === 'week') {
    const selectedDt = parseDateStr(appState.selectedCalDate);
    const dayOfWeek = selectedDt.getDay();
    const startOfWeek = new Date(selectedDt);
    startOfWeek.setDate(selectedDt.getDate() - dayOfWeek);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return { startStr: formatDateStr(startOfWeek), endStr: formatDateStr(endOfWeek) };
  }
  // day view
  return { startStr: appState.selectedCalDate, endStr: appState.selectedCalDate };
}

// Loads Google events for the currently-visible range only. Caches by
// (view, range, selected calendars) so navigating back to an already-loaded
// range is a no-op — pass force=true (Refresh button / calendar toggle) to bypass.
async function refreshGoogleCalendarNow(force) {
  if (!isGoogleTokenValid()) {
    if (force) showToast(t('gcalNotConnectedYet'), 'alert');
    return;
  }

  if (appState.google.selectedCalendarIds.length === 0) {
    appState.google.events = [];
    renderCalendarViewOnly();
    return;
  }

  const range = getCurrentGoogleViewDateRange();
  const cacheKey = JSON.stringify({
    view: appState.calendarView,
    start: range.startStr,
    end: range.endStr,
    cals: appState.google.selectedCalendarIds.slice().sort()
  });

  if (!force && appState.google.lastFetchKey === cacheKey) {
    return; // already loaded for this exact range/selection
  }

  appState.google.loading = true;
  try {
    const events = await fetchGoogleEventsForRange(range.startStr, range.endStr, appState.google.selectedCalendarIds);
    appState.google.events = events;
    appState.google.lastFetchKey = cacheKey;
    appState.google.loading = false;
    renderCalendarViewOnly();
    if (force) showToast(t('gcalRefreshSuccess'), 'success');
  } catch (err) {
    appState.google.loading = false;
    handleGoogleApiError(err);
  }
}

// Fetches events across all selected calendars for [startStr, endStr] (inclusive).
async function fetchGoogleEventsForRange(startStr, endStr, calendarIds) {
  const timeMin = new Date(startStr + 'T00:00:00').toISOString();
  const endExclusive = parseDateStr(endStr);
  endExclusive.setDate(endExclusive.getDate() + 1);
  const timeMax = endExclusive.toISOString();

  const results = [];
  for (const calId of calendarIds) {
    const params = new URLSearchParams({
      timeMin,
      timeMax,
      singleEvents: 'true',
      orderBy: 'startTime',
      maxResults: '250'
    });

    let resp;
    try {
      resp = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calId)}/events?${params.toString()}`, {
        headers: { Authorization: `Bearer ${appState.google.accessToken}` }
      });
    } catch (networkErr) {
      const e = new Error('network_error'); e.type = 'network_error'; throw e;
    }

    if (resp.status === 401) { const e = new Error('token_expired'); e.type = 'auth_expired'; throw e; }
    if (!resp.ok) { const e = new Error('api_error'); e.type = 'api_error'; e.status = resp.status; throw e; }

    const data = await resp.json();
    const items = (data.items || []).filter(it => it.status !== 'cancelled');
    items.forEach(it => {
      const converted = googleEventToWorkHubEvent(it, calId);
      if (converted) results.push(converted);
    });
  }
  return results;
}

// Converts a Google Calendar API event into WorkHub's display-only event shape.
// This object is NEVER pushed into appState.events / localStorage — see
// getCombinedEventsForDate(), which merges it in only at render time.
function googleEventToWorkHubEvent(item, calendarId) {
  const startRaw = item.start && (item.start.dateTime || item.start.date);
  const endRaw = item.end && (item.end.dateTime || item.end.date);
  if (!startRaw) return null;

  const isAllDay = !!(item.start && item.start.date && !item.start.dateTime);
  const startDt = new Date(startRaw);
  const endDt = endRaw ? new Date(endRaw) : startDt;

  const pad = n => String(n).padStart(2, '0');
  const dateStr = `${startDt.getFullYear()}-${pad(startDt.getMonth() + 1)}-${pad(startDt.getDate())}`;
  const startTime = isAllDay ? '00:00' : `${pad(startDt.getHours())}:${pad(startDt.getMinutes())}`;
  const endTime = isAllDay ? '23:59' : `${pad(endDt.getHours())}:${pad(endDt.getMinutes())}`;

  return {
    id: 'gcal-' + calendarId + '-' + item.id,
    googleEventId: item.id,
    googleCalendarId: calendarId,
    source: 'google',
    title: item.summary || t('gcalUntitledEvent'),
    date: dateStr,
    startTime,
    endTime,
    category: 'Others',
    location: item.location || '',
    description: item.description || ''
  };
}

// Read-only details view for a Google Calendar event (Task/Event edit forms
// are never reused for Google data — see openEditEventModal's routing check).
function showGoogleEventDetails(gEventId) {
  const evt = appState.google.events.find(e => e.id === gEventId);
  if (!evt) return;

  const modal = document.getElementById('googleEventDetailsModalOverlay');
  if (!modal) return;

  const titleEl = document.getElementById('gEventDetailsTitle');
  const timeEl = document.getElementById('gEventDetailsTime');
  const locationEl = document.getElementById('gEventDetailsLocation');
  const descEl = document.getElementById('gEventDetailsDescription');

  if (titleEl) titleEl.textContent = evt.title;
  if (timeEl) timeEl.textContent = `${formatShortDate(evt.date)} • ${evt.startTime} – ${evt.endTime}`;
  if (locationEl) locationEl.textContent = evt.location || t('gcalNoLocation');
  if (descEl) descEl.textContent = evt.description || t('gcalNoDescription');

  modal.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function closeGoogleEventDetailsModal() {
  const modal = document.getElementById('googleEventDetailsModalOverlay');
  if (modal) modal.classList.remove('active');
}

// Centralized error handling for every Google Calendar failure mode
// (Requirement #8) — always shows a friendly toast and safely re-renders the
// calendar from whatever data is already held, never crashing the page.
function handleGoogleApiError(err) {
  console.error('Google Calendar error:', err);
  const type = err && err.type;

  if (type === 'auth_expired') {
    // The access token expired mid-session. Before bothering the user, try
    // exactly the same silent (prompt:'none') GIS refresh used on startup —
    // if the browser still has an active Google session this recovers with
    // no visible interruption at all. Only fall back to clearing events and
    // showing "reconnect" once that silent attempt has actually failed.
    appState.google.accessToken = null;
    appState.google.tokenExpiryMs = null;
    updateGoogleConnectBtnLabel();
    updateGoogleCalModalUI();
    attemptSilentGoogleReconnect(() => {
      appState.google.events = [];
      updateGoogleConnectBtnLabel();
      updateGoogleCalModalUI();
      showToast(t('gcalTokenExpired'), 'alert');
      renderCalendarViewOnly();
    });
    return; // renderCalendarViewOnly() runs either via the successful silent
            // reconnect's own refresh, or via the failure callback above.
  } else if (type === 'network_error') {
    showToast(t('gcalNetworkError'), 'alert');
  } else {
    showToast(t('gcalApiError'), 'alert');
  }

  // Re-render from currently-held data only — do NOT call renderCalendar() here,
  // since that would immediately retry the same failing fetch in a loop.
  renderCalendarViewOnly();
}

// ==========================================================================
// GOOGLE SHEETS INTEGRATION (Phase 1 — WorkHub -> Google Sheets)
// ==========================================================================
// Architecture: WorkHub's localStorage (Tasks / Projects / Categories) stays
// the single source of truth. A Google Apps Script Web App — deployed by the
// user inside their OWN Google account, bound to their own Google Sheet — is
// the sync backend. WorkHub's browser calls that Web App with a JSON POST
// (Task/Project/Category upsert, or delete) and the script writes/updates the
// matching row by ID (UPSERT — never duplicates), then appends a Sync Log row.
//
// SECURITY: this design involves no Google OAuth token and no Google Client
// Secret. The only credential is a "sync key" the user types once into their
// own Apps Script (SYNC_SECRET constant, see the .gs code) and pastes into
// this Connect modal — a private bearer token for their own script, never a
// Google-issued credential, never sent anywhere except that one Web App URL.
// It is stored in localStorage (workhub_gsheets_sync_secret) exactly like the
// Web App URL itself — never the Task/Project/Category DATA is required to be
// present for the connection to exist, and Google Sheets is never allowed to
// be the only place data lives: every write happens to localStorage FIRST,
// and a Sheets sync failure never blocks, rolls back, or deletes local data.
//
// All Google Sheets logic lives in this block only. The existing Task/Project/
// Category CRUD functions each make ONE additional call into this block
// (e.g. `if (isGoogleSheetsConnected()) syncTaskToGoogleSheets(task);`) —
// no Sheets API/network code is scattered elsewhere in the file.

function isGoogleSheetsConnected() {
  return !!(appState.googleSheets.webAppUrl && appState.googleSheets.syncSecret);
}

function initGoogleSheetsIntegration() {
  const connectBtn = document.getElementById('gsheetsConnectBtn');
  const modal = document.getElementById('gsheetsModalOverlay');
  const closeBtn = document.getElementById('closeGsheetsModalBtn');
  const closeFooterBtn = document.getElementById('closeGsheetsModalFooterBtn');
  const connectSubmitBtn = document.getElementById('gsheetsConnectSubmitBtn');
  const syncNowBtn = document.getElementById('gsheetsSyncNowBtn');
  const disconnectBtn = document.getElementById('gsheetsDisconnectBtn');
  const urlInput = document.getElementById('gsheetsWebAppUrlInput');
  const secretInput = document.getElementById('gsheetsSyncSecretInput');

  if (urlInput && appState.googleSheets.webAppUrl) urlInput.value = appState.googleSheets.webAppUrl;
  if (secretInput && appState.googleSheets.syncSecret) secretInput.value = appState.googleSheets.syncSecret;

  if (connectBtn) {
    connectBtn.addEventListener('click', () => {
      updateGoogleSheetsModalUI();
      if (modal) modal.classList.add('active');
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', () => modal.classList.remove('active'));

  if (connectSubmitBtn) {
    connectSubmitBtn.addEventListener('click', () => {
      connectGoogleSheets();
    });
  }
  if (syncNowBtn) {
    syncNowBtn.addEventListener('click', () => {
      syncAllToGoogleSheets();
    });
  }
  if (disconnectBtn) {
    disconnectBtn.addEventListener('click', () => {
      disconnectGoogleSheets();
    });
  }

  updateGoogleSheetsConnectBtnLabel();
  updateGoogleSheetsModalUI();

  // Automatic background sync on startup: if Google Sheets is already
  // configured, keep it up to date without requiring a manual "Sync Now"
  // click. This is the same safe UPSERT-everything logic Sync Now already
  // uses (see runFullGoogleSheetsSync) — it never blocks the UI (it's async)
  // and never deletes/replaces anything in the Sheet.
  if (isGoogleSheetsConnected()) {
    runFullGoogleSheetsSync('Auto Sync');
  }
  // Also catch up on anything that failed to sync during a previous session
  // (queued in localStorage — see flushGSheetsRetryQueue below).
  flushGSheetsRetryQueue();
}

function updateGoogleSheetsConnectBtnLabel() {
  const btnText = document.getElementById('gsheetsConnectBtnText');
  if (!btnText) return;
  btnText.textContent = isGoogleSheetsConnected() ? t('gsheetsConnectedBtn') : t('gsheetsConnectBtnLabel');
}

function formatGsheetsLastSynced() {
  if (!appState.googleSheets.lastSyncedMs) return t('gsheetsNeverSynced');
  const d = new Date(appState.googleSheets.lastSyncedMs);
  const pad = n => String(n).padStart(2, '0');
  const timeStr = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  return t('gsheetsLastSynced', { time: timeStr });
}

function updateGoogleSheetsModalUI() {
  const statusIcon = document.getElementById('gsheetsStatusIcon');
  const statusText = document.getElementById('gsheetsStatusText');
  const syncRow = document.getElementById('gsheetsSyncRow');
  const connectSubmitBtn = document.getElementById('gsheetsConnectSubmitBtn');
  const lastSyncedText = document.getElementById('gsheetsLastSyncedText');

  const connected = isGoogleSheetsConnected();
  if (statusIcon) statusIcon.setAttribute('data-lucide', connected ? 'check-circle-2' : 'circle-slash');
  if (statusText) statusText.textContent = connected ? t('gsheetsStatusConnected') : t('gsheetsStatusNotConnected');
  if (syncRow) syncRow.style.display = connected ? 'flex' : 'none';
  if (connectSubmitBtn) connectSubmitBtn.textContent = connected ? t('gsheetsReconnectBtn') : t('gsheetsConnectBtnShort');
  if (lastSyncedText) lastSyncedText.textContent = formatGsheetsLastSynced();

  if (window.lucide) lucide.createIcons();
}

// Live "Tasks: x/y" style progress feedback during Initial Sync / Sync Now,
// shown inside the Connect modal using the existing status-row component.
function updateGoogleSheetsSyncProgressUI(label, done, totals, phase) {
  const progressEl = document.getElementById('gsheetsSyncProgressText');
  if (!progressEl) return;

  if (phase === 'running') {
    progressEl.textContent = `${t('gsheetsSyncRunning')}  ${t('gsheetsProgressTasks', { done: done.tasks, total: totals.tasks })} · ${t('gsheetsProgressProjects', { done: done.projects, total: totals.projects })} · ${t('gsheetsProgressCategories', { done: done.categories, total: totals.categories })}`;
  } else if (phase === 'done') {
    progressEl.textContent = `${t('gsheetsInitialSyncCompleted')}  ${t('gsheetsProgressTasks', { done: done.tasks, total: totals.tasks })} · ${t('gsheetsProgressProjects', { done: done.projects, total: totals.projects })} · ${t('gsheetsProgressCategories', { done: done.categories, total: totals.categories })}`;
  } else if (phase === 'partial') {
    progressEl.textContent = `${t('gsheetsSyncPartial')}  ${t('gsheetsProgressTasks', { done: done.tasks, total: totals.tasks })} · ${t('gsheetsProgressProjects', { done: done.projects, total: totals.projects })} · ${t('gsheetsProgressCategories', { done: done.categories, total: totals.categories })}`;
  } else {
    progressEl.textContent = '';
  }
}

// Every Google Sheets failure mode (timeout, network, permission, bad
// response, generic API error) lands here. It NEVER throws further and
// NEVER touches Tasks/Projects/Categories — WorkHub's local functionality
// keeps working exactly as before. Always shows "Google Sheets sync failed",
// never a generic "WorkHub error".
function handleGoogleSheetsApiError(err, duringConnect) {
  console.warn('Google Sheets sync error:', err);
  const type = err && err.type;
  let msgKey = 'gsheetsApiError';
  if (type === 'network_error') msgKey = 'gsheetsNetworkError';
  else if (type === 'permission_error') msgKey = 'gsheetsPermissionError';
  else if (type === 'not_connected') msgKey = 'gsheetsNotConnectedYet';

  if (duringConnect) {
    showToast(t('gsheetsConnectFailed'), 'alert');
  } else {
    showToast(t(msgKey), 'alert');
  }
}

// Low-level transport shared by every Sheets call. Uses text/plain as the
// Content-Type (rather than application/json) specifically so the browser
// treats this as a "simple request" and skips the CORS preflight — Apps
// Script Web Apps don't implement an OPTIONS handler, so a JSON content type
// here would otherwise make every call fail with a CORS error.
async function callGoogleSheetsApi(action, payload) {
  if (!isGoogleSheetsConnected()) {
    throw Object.assign(new Error('not_connected'), { type: 'not_connected' });
  }

  let resp;
  try {
    resp = await fetch(appState.googleSheets.webAppUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ secret: appState.googleSheets.syncSecret, action, payload: payload || {} })
    });
  } catch (networkErr) {
    throw Object.assign(new Error('network_error'), { type: 'network_error' });
  }

  if (!resp.ok) {
    throw Object.assign(new Error('api_error'), { type: 'api_error', status: resp.status });
  }

  let data;
  try {
    data = await resp.json();
  } catch (parseErr) {
    throw Object.assign(new Error('invalid_response'), { type: 'invalid_response' });
  }

  if (!data || data.ok === false) {
    const errCode = data && data.error;
    throw Object.assign(new Error(errCode || 'api_error'), { type: errCode === 'unauthorized' ? 'permission_error' : 'api_error' });
  }

  return data;
}

// Best-effort connection-level log entries (connect / disconnect / batch
// summary). Per-record Create/Update/Delete log rows are written by the Apps
// Script itself as part of each upsert/delete call, so WorkHub doesn't need
// a second round trip for those.
async function writeSyncLog(action, recordType, recordId, status, errorMessage) {
  if (!isGoogleSheetsConnected()) return;
  try {
    await callGoogleSheetsApi('log', {
      action,
      source: 'WorkHub',
      recordType: recordType || '',
      recordId: recordId || '',
      status: status || 'Success',
      errorMessage: errorMessage || ''
    });
  } catch (err) {
    // Logging failures must never surface to the user or block anything.
    console.warn('Sync log write failed:', err);
  }
}

// ---- WorkHub object -> Google Sheet row mapping ----
// Only maps fields that actually exist on WorkHub's current Task/Project/
// Category objects (see DEFAULT_TASKS/DEFAULT_PROJECTS/DEFAULT_CATEGORIES
// above). Anything the header asks for that WorkHub doesn't track
// (Start Time/End Time/Created At/Updated At/Google Event ID on Tasks; Start
// Date/End Date/Created At/Updated At on Projects; Created At/Updated At on
// Categories) is sent as an empty string rather than invented — the Apps
// Script leaves those Sheet columns blank.
// Completed Date IS tracked (added for the Task Management "Completion
// Date" feature) and is sent through as-is: '' for any task that has never
// been marked Completed, or for a legacy/migrated task that was already
// Completed before this feature existed and has no real timestamp — never
// backfilled with an invented date.
function taskToSheetPayload(task) {
  return {
    id: task.id,
    date: '',                    // WorkHub tasks have no separate "record date" field
    title: task.title || '',
    description: '',             // WorkHub tasks have no separate description field (only notes)
    category: task.category || '',
    project: task.project || '',
    priority: task.priority || '',
    status: task.status || '',
    startTime: '',
    endTime: '',
    dueDate: task.dueDate || '',
    completedDate: task.completedDate || '',
    notes: task.notes || '',
    googleEventId: '',
    createdAt: '',
    updatedAt: ''
  };
}

function projectToSheetPayload(project) {
  return {
    id: project.id,
    name: project.name || '',
    description: project.description || '',
    active: project.active !== false,
    startDate: '',
    endDate: '',
    createdAt: '',
    updatedAt: ''
  };
}

function categoryToSheetPayload(category) {
  return {
    id: category.id,
    name: category.name || '',
    description: category.description || '',
    active: category.active !== false,
    createdAt: '',
    updatedAt: ''
  };
}

// ---- Automatic sync reliability layer: debounce + persistent retry queue ----
// This sits underneath the 4 per-record sync functions below — it does not
// add a second sync system, every function still builds the same payload and
// calls the same callGoogleSheetsApi() action it always did. It only:
//   (a) coalesces rapid repeat calls for the SAME record into one network
//       call (e.g. several quick edits, or status-toggle + edit in a row),
//       instead of firing duplicate overlapping requests, and
//   (b) remembers a failed call in localStorage so it can be retried
//       automatically — on reconnect, or on a background timer — even across
//       a page reload, without ever touching or blocking local WorkHub data.
const GSHEETS_RETRY_QUEUE_KEY = 'workhub_gsheets_retry_queue';
const GSHEETS_DEBOUNCE_MS = 500;
const gsheetsDebounceTimers = {};

function loadGSheetsRetryQueue() {
  try { return JSON.parse(localStorage.getItem(GSHEETS_RETRY_QUEUE_KEY) || '[]'); } catch (e) { return []; }
}
function saveGSheetsRetryQueue(queue) {
  try { localStorage.setItem(GSHEETS_RETRY_QUEUE_KEY, JSON.stringify(queue)); } catch (e) { /* quota errors: non-fatal, just skip persisting */ }
}
// Only the LATEST attempt per record is kept — if a task was edited twice
// while offline, replaying the newer payload is all that's needed.
function queueGSheetsRetry(opKey, action, payload) {
  const queue = loadGSheetsRetryQueue().filter(item => item.opKey !== opKey);
  queue.push({ opKey, action, payload, addedAt: Date.now() });
  saveGSheetsRetryQueue(queue);
}
function clearGSheetsRetry(opKey) {
  const queue = loadGSheetsRetryQueue();
  if (queue.length === 0) return;
  saveGSheetsRetryQueue(queue.filter(item => item.opKey !== opKey));
}

// Replays every queued operation in order. Safe to call any time — every
// queued action is the same idempotent upsert/soft-delete the live UI already
// performs, so re-running a stale one can never duplicate or corrupt a row.
let gsheetsFlushingQueue = false;
async function flushGSheetsRetryQueue() {
  if (gsheetsFlushingQueue || !isGoogleSheetsConnected()) return;
  const queue = loadGSheetsRetryQueue();
  if (queue.length === 0) return;
  gsheetsFlushingQueue = true;
  for (const item of queue) {
    try {
      await callGoogleSheetsApi(item.action, item.payload);
      clearGSheetsRetry(item.opKey);
    } catch (err) {
      // Still failing (offline / endpoint down) — leave it queued and try
      // again on the next flush (see the 'online' listener and interval below).
    }
  }
  gsheetsFlushingQueue = false;
  updateGoogleSheetsModalUI();
}

// Coalesces rapid repeat calls sharing the same opKey (e.g. "task:T004")
// into a single network call carrying only the latest payload.
function debounceGSheetsOp(opKey, runNow) {
  if (gsheetsDebounceTimers[opKey]) clearTimeout(gsheetsDebounceTimers[opKey]);
  return new Promise(resolve => {
    gsheetsDebounceTimers[opKey] = setTimeout(async () => {
      delete gsheetsDebounceTimers[opKey];
      resolve(await runNow());
    }, GSHEETS_DEBOUNCE_MS);
  });
}

// Automatic retry: as soon as the browser regains connectivity, and on a
// slow background timer as a safety net for "endpoint temporarily down"
// cases that don't fire a browser online/offline event.
window.addEventListener('online', () => { flushGSheetsRetryQueue(); });
setInterval(() => { flushGSheetsRetryQueue(); }, 30000);

// ---- Per-record sync (called after every localStorage write) ----
// Each pair below is: an internal "_do..." core that actually makes the one
// network call (used directly by the bulk Initial Sync/Sync Now loop, which
// deliberately stays undebounced so syncing many records isn't artificially
// slowed down), and the public function (used by every individual Task/
// Project/Category create-edit-delete call site) which debounces through
// debounceGSheetsOp so rapid repeated edits to the same record collapse into
// one request instead of firing overlapping duplicates.

async function _doSyncTaskToGoogleSheets(task, logLabel) {
  const opKey = 'task:' + task.id;
  const payload = taskToSheetPayload(task);
  if (logLabel) payload.logLabel = logLabel;
  try {
    await callGoogleSheetsApi('upsertTask', payload);
    clearGSheetsRetry(opKey);
    return { ok: true };
  } catch (err) {
    queueGSheetsRetry(opKey, 'upsertTask', payload);
    handleGoogleSheetsApiError(err);
    return { ok: false, error: err };
  }
}
async function syncTaskToGoogleSheets(task, logLabel) {
  if (!isGoogleSheetsConnected()) return { ok: false, skipped: true };
  return debounceGSheetsOp('task:' + task.id, () => _doSyncTaskToGoogleSheets(task, logLabel));
}

async function _doSyncProjectToGoogleSheets(project, logLabel) {
  const opKey = 'project:' + project.id;
  const payload = projectToSheetPayload(project);
  if (logLabel) payload.logLabel = logLabel;
  try {
    await callGoogleSheetsApi('upsertProject', payload);
    clearGSheetsRetry(opKey);
    return { ok: true };
  } catch (err) {
    queueGSheetsRetry(opKey, 'upsertProject', payload);
    handleGoogleSheetsApiError(err);
    return { ok: false, error: err };
  }
}
async function syncProjectToGoogleSheets(project, logLabel) {
  if (!isGoogleSheetsConnected()) return { ok: false, skipped: true };
  return debounceGSheetsOp('project:' + project.id, () => _doSyncProjectToGoogleSheets(project, logLabel));
}

async function _doSyncCategoryToGoogleSheets(category, logLabel) {
  const opKey = 'category:' + category.id;
  const payload = categoryToSheetPayload(category);
  if (logLabel) payload.logLabel = logLabel;
  try {
    await callGoogleSheetsApi('upsertCategory', payload);
    clearGSheetsRetry(opKey);
    return { ok: true };
  } catch (err) {
    queueGSheetsRetry(opKey, 'upsertCategory', payload);
    handleGoogleSheetsApiError(err);
    return { ok: false, error: err };
  }
}
async function syncCategoryToGoogleSheets(category, logLabel) {
  if (!isGoogleSheetsConnected()) return { ok: false, skipped: true };
  return debounceGSheetsOp('category:' + category.id, () => _doSyncCategoryToGoogleSheets(category, logLabel));
}

// SOFT DELETE ONLY: this calls the same 'deleteTask' action the Apps Script
// has always exposed, but the Apps Script side now marks the row Deleted /
// Deleted At instead of removing it (see WorkHub_GoogleSheets_AppsScript.gs,
// handleDeleteTask_) — the historical row is never actually deleted.
async function _doDeleteTaskFromGoogleSheets(taskId) {
  const opKey = 'deleteTask:' + taskId;
  const payload = { id: taskId };
  try {
    await callGoogleSheetsApi('deleteTask', payload);
    clearGSheetsRetry(opKey);
    return { ok: true };
  } catch (err) {
    queueGSheetsRetry(opKey, 'deleteTask', payload);
    handleGoogleSheetsApiError(err);
    return { ok: false, error: err };
  }
}
async function deleteTaskFromGoogleSheets(taskId) {
  if (!isGoogleSheetsConnected()) return { ok: false, skipped: true };
  return debounceGSheetsOp('deleteTask:' + taskId, () => _doDeleteTaskFromGoogleSheets(taskId));
}

// ---- Connect / Disconnect ----

async function connectGoogleSheets() {
  const urlInput = document.getElementById('gsheetsWebAppUrlInput');
  const secretInput = document.getElementById('gsheetsSyncSecretInput');
  const url = (urlInput && urlInput.value || '').trim();
  const secret = (secretInput && secretInput.value || '').trim();

  if (!url || !secret) {
    showToast(t('gsheetsMissingConfig'), 'alert');
    return;
  }

  // Set provisionally so callGoogleSheetsApi() can use them for the test ping;
  // rolled back below if the ping fails, so a bad config is never persisted.
  appState.googleSheets.webAppUrl = url;
  appState.googleSheets.syncSecret = secret;

  const progressEl = document.getElementById('gsheetsSyncProgressText');
  if (progressEl) progressEl.textContent = t('gsheetsConnecting');

  try {
    await callGoogleSheetsApi('ping', {});
  } catch (err) {
    appState.googleSheets.webAppUrl = null;
    appState.googleSheets.syncSecret = null;
    if (progressEl) progressEl.textContent = '';
    handleGoogleSheetsApiError(err, /* duringConnect */ true);
    updateGoogleSheetsModalUI();
    return;
  }

  localStorage.setItem('workhub_gsheets_webapp_url', url);
  localStorage.setItem('workhub_gsheets_sync_secret', secret);

  showToast(t('gsheetsConnected'), 'success');
  updateGoogleSheetsConnectBtnLabel();
  updateGoogleSheetsModalUI();

  await initialGoogleSheetsSync();
}

// Disconnecting only clears the Web App URL / sync key. WorkHub's own Tasks,
// Projects, and Categories in localStorage are never touched here.
function disconnectGoogleSheets() {
  appState.googleSheets.webAppUrl = null;
  appState.googleSheets.syncSecret = null;
  appState.googleSheets.lastSyncedMs = null;
  appState.googleSheets.syncing = false;
  localStorage.removeItem('workhub_gsheets_webapp_url');
  localStorage.removeItem('workhub_gsheets_sync_secret');
  localStorage.removeItem('workhub_gsheets_last_synced');

  updateGoogleSheetsConnectBtnLabel();
  updateGoogleSheetsModalUI();
  const progressEl = document.getElementById('gsheetsSyncProgressText');
  if (progressEl) progressEl.textContent = '';
  showToast(t('gsheetsDisconnected'), 'default');
}

// ---- Initial Sync / Sync Now (both share the same UPSERT-everything logic,
// so re-running either one is always safe and never creates duplicate rows) ----

async function runFullGoogleSheetsSync(label) {
  if (!isGoogleSheetsConnected() || appState.googleSheets.syncing) return;
  appState.googleSheets.syncing = true;

  // Snapshot current localStorage data. Reading it fresh here — rather than
  // depending on anything passed in — is what guarantees Initial Sync always
  // uploads every Task/Project/Category that already exists, not just future
  // changes, and that Sync Now always reflects the current local state.
  const tasks = appState.tasks.slice();
  const projects = appState.projects.slice();
  const categories = appState.categories.slice();
  const totals = { tasks: tasks.length, projects: projects.length, categories: categories.length };
  const done = { tasks: 0, projects: 0, categories: 0 };
  const failed = { tasks: 0, projects: 0, categories: 0 };

  updateGoogleSheetsSyncProgressUI(label, done, totals, 'running');

  // Sequential (not parallel) on purpose — many rapid concurrent writes to the
  // same Google Sheet from Apps Script can race on row lookups; sequential
  // keeps every UPSERT correct even with zero data to work with (0 tasks etc,
  // per Requirement: missing categories just means an empty loop, no error).
  for (const taskItem of tasks) {
    const r = await _doSyncTaskToGoogleSheets(taskItem, label);
    if (r.ok) done.tasks++; else failed.tasks++;
    updateGoogleSheetsSyncProgressUI(label, done, totals, 'running');
  }
  for (const projectItem of projects) {
    const r = await _doSyncProjectToGoogleSheets(projectItem, label);
    if (r.ok) done.projects++; else failed.projects++;
    updateGoogleSheetsSyncProgressUI(label, done, totals, 'running');
  }
  for (const categoryItem of categories) {
    const r = await _doSyncCategoryToGoogleSheets(categoryItem, label);
    if (r.ok) done.categories++; else failed.categories++;
    updateGoogleSheetsSyncProgressUI(label, done, totals, 'running');
  }

  appState.googleSheets.syncing = false;
  const anyFailed = (failed.tasks + failed.projects + failed.categories) > 0;

  // Only stamp "Last Synced" once every record in this run actually made it
  // to Google Sheets — a partial run means some data is still only local, so
  // the status should keep reflecting the last time everything was current.
  if (!anyFailed) {
    appState.googleSheets.lastSyncedMs = Date.now();
    localStorage.setItem('workhub_gsheets_last_synced', String(appState.googleSheets.lastSyncedMs));
  }

  await writeSyncLog(
    label + ' Completed',
    'Summary',
    '',
    anyFailed ? 'Partial' : 'Success',
    `${done.tasks}/${totals.tasks} Tasks synced, ${done.projects}/${totals.projects} Projects synced, ${done.categories}/${totals.categories} Categories synced`
  );

  updateGoogleSheetsSyncProgressUI(label, done, totals, anyFailed ? 'partial' : 'done');
  updateGoogleSheetsModalUI();

  showToast(anyFailed ? t('gsheetsSyncPartial') : t('gsheetsSyncCompleted'), anyFailed ? 'alert' : 'success');
}

async function initialGoogleSheetsSync() {
  await runFullGoogleSheetsSync('Initial Sync');
}

async function syncAllToGoogleSheets() {
  await runFullGoogleSheetsSync('Sync Now');
}

function generateSampleSummaryReport() {
  const total = appState.tasks.length;
  const completed = appState.tasks.filter(t => t.status === 'Completed').length;
  const highPri = appState.tasks.filter(t => t.priority === 'Critical' || t.priority === 'High').length;
  const eventsCount = appState.events.length;
  const todayStr = getTodaySGTStr();
  const formattedToday = formatShortDate(todayStr);

  const summaryText = `PEOPLE GROWTH & DEVELOPMENT - PRODUCTIVITY SUMMARY
--------------------------------------------------
Generated: ${formattedToday} (SGT)
Profile: Jenny (People Growth & Development)
Total Task Repository: ${total} Tasks across SG, CN & PP Projects
Completed Tasks: ${completed} (${Math.round((completed/total)*100)}%)
Critical / High Priority Items: ${highPri}
Scheduled Meetings & Trainings (July 2026): ${eventsCount} Events
Status: Highly Synchronized • Talent Development Top Tier`;

  const blob = new Blob([summaryText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `WorkHub_Jenny_Summary_Report_${todayStr}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(t('toastReportDownloaded'), 'success');
}

// ==========================================================================
// DATE & STRING UTILITY FUNCTIONS
// ==========================================================================
function parseDateStr(dateStr) {
  const parts = dateStr.split('-');
  return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
}

function formatDateStr(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const dt = parseDateStr(dateStr);
  const y = dt.getFullYear();
  const d = dt.getDate();
  if (appState.lang === 'zh') {
    const m = dt.getMonth() + 1;
    return `${y}年${m}月${d}日`;
  } else {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const mStr = months[dt.getMonth()];
    return `${d} ${mStr} ${y}`;
  }
}

function formatFullDate(dateStr) {
  if (!dateStr) return '';
  const dt = parseDateStr(dateStr);
  return dt.toLocaleDateString(appState.lang === 'zh' ? 'zh-CN' : 'en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
}

function formatDisplayDate(dateStr) {
  const formatted = formatShortDate(dateStr);
  const todayStr = getTodaySGTStr();
  if (dateStr === todayStr) {
    return appState.lang === 'zh' ? `今日 (${formatted})` : `Today (${formatted})`;
  }
  const dt = parseDateStr(dateStr);
  const currDt = parseDateStr(todayStr);
  const diffTime = dt - currDt;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === -1) return appState.lang === 'zh' ? `昨日 (${formatted})` : `Yesterday (${formatted})`;
  if (diffDays === 1) return appState.lang === 'zh' ? `明日 (${formatted})` : `Tomorrow (${formatted})`;
  if (diffDays < 0) return appState.lang === 'zh' ? `已逾期 ${Math.abs(diffDays)}天 (${formatted})` : `${Math.abs(diffDays)}d overdue (${formatted})`;
  return formatted;
}

// ==========================================================================
// TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToast(message, type = 'default') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconName = 'bell';
  if (type === 'success') iconName = 'check-circle';
  if (type === 'alert') iconName = 'alert-triangle';

  toast.innerHTML = `
    <i data-lucide="${iconName}" style="width:18px; height:18px; color: #FFD000; flex-shrink:0;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.2s';
    setTimeout(() => {
      toast.remove();
    }, 200);
  }, 3500);
}

// Expose modal and helper functions globally for inline HTML events
window.toggleTaskStatus = toggleTaskStatus;
window.updateTaskStatus = updateTaskStatus;
window.deleteTask = deleteTask;
window.openAddTaskModal = openAddTaskModal;
window.openEditTaskModal = openEditTaskModal;
window.openAddEventModal = openAddEventModal;
window.openEditEventModal = openEditEventModal;
window.deleteEvent = deleteEvent;
window.onCalendarCellClick = onCalendarCellClick;
window.onCalendarMoreClick = onCalendarMoreClick;
window.openEditItemModal = openEditItemModal;
window.toggleArchiveItem = toggleArchiveItem;
window.generateSampleSummaryReport = generateSampleSummaryReport;
