
function RequestManager(){
}
RequestManager.prototype = {
/* 保存日程或成绩 */
/* 入参AssignTaskData */
/* 出参VoidableData */
AcceptAssignTasksync : function(data,_success,_error)
{
	return this.callfunc("AcceptAssignTask",false,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AssignTaskData */
/* 出参VoidableData */
AcceptAssignTask : function(data,_success,_error)	
{
	return this.callfunc("AcceptAssignTask",true,data,_success,_error);
},
/* 添加学校 */
/* 入参AddCollegeData */
/* 出参VoidableData */
AddCollegesync : function(data,_success,_error)
{
	return this.callfunc("AddCollege",false,data,_success,_error);
},
/* 添加学校 */
/* 入参AddCollegeData */
/* 出参VoidableData */
AddCollege : function(data,_success,_error)	
{
	return this.callfunc("AddCollege",true,data,_success,_error);
},
/* checklist项指定文件操作，学生可用 */
/* 入参AssignChecklistFileData */
/* 出参VoidableData */
AssignChecklistFilesync : function(data,_success,_error)
{
	return this.callfunc("AssignChecklistFile",false,data,_success,_error);
},
/* checklist项指定文件操作，学生可用 */
/* 入参AssignChecklistFileData */
/* 出参VoidableData */
AssignChecklistFile : function(data,_success,_error)	
{
	return this.callfunc("AssignChecklistFile",true,data,_success,_error);
},
/* checklist项取消指定文件操作，学生可用 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
CancelChecklistFilesync : function(data,_success,_error)
{
	return this.callfunc("CancelChecklistFile",false,data,_success,_error);
},
/* checklist项取消指定文件操作，学生可用 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
CancelChecklistFile : function(data,_success,_error)	
{
	return this.callfunc("CancelChecklistFile",true,data,_success,_error);
},
/* 修改用户密码 */
/* 入参ChangpasswordData */
/* 出参VoidableData */
ChangPasswordsync : function(data,_success,_error)
{
	return this.callfunc("ChangPassword",false,data,_success,_error);
},
/* 修改用户密码 */
/* 入参ChangpasswordData */
/* 出参VoidableData */
ChangPassword : function(data,_success,_error)	
{
	return this.callfunc("ChangPassword",true,data,_success,_error);
},
/* 学生最终确认 */
/* 入参BasicParameterData */
/* 出参VoidableData */
ConfirmFormsync : function(data,_success,_error)
{
	return this.callfunc("ConfirmForm",false,data,_success,_error);
},
/* 学生最终确认 */
/* 入参BasicParameterData */
/* 出参VoidableData */
ConfirmForm : function(data,_success,_error)	
{
	return this.callfunc("ConfirmForm",true,data,_success,_error);
},
/* 偏好列表，学生用 */
/* 入参PreferenceTestSelectInfoData */
/* 出参PersonalCollegeInfoListPageData */
CounselorSelectPreferencesync : function(data,_success,_error)
{
	return this.callfunc("CounselorSelectPreference",false,data,_success,_error);
},
/* 偏好列表，学生用 */
/* 入参PreferenceTestSelectInfoData */
/* 出参PersonalCollegeInfoListPageData */
CounselorSelectPreference : function(data,_success,_error)	
{
	return this.callfunc("CounselorSelectPreference",true,data,_success,_error);
},
/* 删除任务/考试 */
/* 入参DelayTestFillScoredateData */
/* 出参VoidableData */
DelayTestFillScoredatesync : function(data,_success,_error)
{
	return this.callfunc("DelayTestFillScoredate",false,data,_success,_error);
},
/* 删除任务/考试 */
/* 入参DelayTestFillScoredateData */
/* 出参VoidableData */
DelayTestFillScoredate : function(data,_success,_error)	
{
	return this.callfunc("DelayTestFillScoredate",true,data,_success,_error);
},
/* 上传文件，学生用 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
DeleteFilesync : function(data,_success,_error)
{
	return this.callfunc("DeleteFile",false,data,_success,_error);
},
/* 上传文件，学生用 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
DeleteFile : function(data,_success,_error)	
{
	return this.callfunc("DeleteFile",true,data,_success,_error);
},
/* 删除任务/考试 */
/* 入参DeleteTaskData */
/* 出参VoidableData */
DeleteTasksync : function(data,_success,_error)
{
	return this.callfunc("DeleteTask",false,data,_success,_error);
},
/* 删除任务/考试 */
/* 入参DeleteTaskData */
/* 出参VoidableData */
DeleteTask : function(data,_success,_error)	
{
	return this.callfunc("DeleteTask",true,data,_success,_error);
},
/* 取班级公告，老师学生家长的首页用 */
/* 入参BasicParameterData */
/* 出参ClassMessgeData */
FecthClassMessgesync : function(data,_success,_error)
{
	return this.callfunc("FecthClassMessge",false,data,_success,_error);
},
/* 取班级公告，老师学生家长的首页用 */
/* 入参BasicParameterData */
/* 出参ClassMessgeData */
FecthClassMessge : function(data,_success,_error)	
{
	return this.callfunc("FecthClassMessge",true,data,_success,_error);
},
/* 取大学详细信息，所有人都用 */
/* 入参BasicParameterData */
/* 出参collegeData */
FecthCollegeDetailsync : function(data,_success,_error)
{
	return this.callfunc("FecthCollegeDetail",false,data,_success,_error);
},
/* 取大学详细信息，所有人都用 */
/* 入参BasicParameterData */
/* 出参collegeData */
FecthCollegeDetail : function(data,_success,_error)	
{
	return this.callfunc("FecthCollegeDetail",true,data,_success,_error);
},
/* 取文件夹下的文件列表 */
/* 入参PageBasicStudentParameterData */
/* 出参applyfilePageListData */
FecthFileListsync : function(data,_success,_error)
{
	return this.callfunc("FecthFileList",false,data,_success,_error);
},
/* 取文件夹下的文件列表 */
/* 入参PageBasicStudentParameterData */
/* 出参applyfilePageListData */
FecthFileList : function(data,_success,_error)	
{
	return this.callfunc("FecthFileList",true,data,_success,_error);
},
/* 取文件 */
/* 入参BasicStudentParameterData */
/* 出参ByteArrayData */
FecthFilesync : function(data,_success,_error)
{
	return this.callfunc("FecthFile",false,data,_success,_error);
},
/* 取文件 */
/* 入参BasicStudentParameterData */
/* 出参ByteArrayData */
FecthFile : function(data,_success,_error)	
{
	return this.callfunc("FecthFile",true,data,_success,_error);
},
/* 取checklist列表，学生首页界面 */
/* 入参PageBasicParameterData */
/* 出参ChecklistItemListData */
FecthHandleChecklistssync : function(data,_success,_error)
{
	return this.callfunc("FecthHandleChecklists",false,data,_success,_error);
},
/* 取checklist列表，学生首页界面 */
/* 入参PageBasicParameterData */
/* 出参ChecklistItemListData */
FecthHandleChecklists : function(data,_success,_error)	
{
	return this.callfunc("FecthHandleChecklists",true,data,_success,_error);
},
/* 取当前学生总的文件大小，申请文件页面 */
/* 入参BasicStudentParameterData */
/* 出参IntegerData */
FecthTotalFileSizesync : function(data,_success,_error)
{
	return this.callfunc("FecthTotalFileSize",false,data,_success,_error);
},
/* 取当前学生总的文件大小，申请文件页面 */
/* 入参BasicStudentParameterData */
/* 出参IntegerData */
FecthTotalFileSize : function(data,_success,_error)	
{
	return this.callfunc("FecthTotalFileSize",true,data,_success,_error);
},
/* 去学生未完成任务 */
/* 入参BasicParameterData */
/* 出参UnHandleTaskListData */
FecthUnHandleTasksync : function(data,_success,_error)
{
	return this.callfunc("FecthUnHandleTask",false,data,_success,_error);
},
/* 去学生未完成任务 */
/* 入参BasicParameterData */
/* 出参UnHandleTaskListData */
FecthUnHandleTask : function(data,_success,_error)	
{
	return this.callfunc("FecthUnHandleTask",true,data,_success,_error);
},
/* 取班级公告，老师学生家长的首页用 */
/* 入参BasicParameterData */
/* 出参IntegerData */
FecthUnreadAlertmessgeCountsync : function(data,_success,_error)
{
	return this.callfunc("FecthUnreadAlertmessgeCount",false,data,_success,_error);
},
/* 取班级公告，老师学生家长的首页用 */
/* 入参BasicParameterData */
/* 出参IntegerData */
FecthUnreadAlertmessgeCount : function(data,_success,_error)	
{
	return this.callfunc("FecthUnreadAlertmessgeCount",true,data,_success,_error);
},
/* 取获奖信息 */
/* 入参BasicParameterData */
/* 出参activitysListParamData */
FetchActivitessync : function(data,_success,_error)
{
	return this.callfunc("FetchActivites",false,data,_success,_error);
},
/* 取获奖信息 */
/* 入参BasicParameterData */
/* 出参activitysListParamData */
FetchActivites : function(data,_success,_error)	
{
	return this.callfunc("FetchActivites",true,data,_success,_error);
},
/* 取学生的最近任务，分页 */
/* 入参FetchAlertMessageData */
/* 出参alertmessagePageListData */
FetchAlertMessagesync : function(data,_success,_error)
{
	return this.callfunc("FetchAlertMessage",false,data,_success,_error);
},
/* 取学生的最近任务，分页 */
/* 入参FetchAlertMessageData */
/* 出参alertmessagePageListData */
FetchAlertMessage : function(data,_success,_error)	
{
	return this.callfunc("FetchAlertMessage",true,data,_success,_error);
},
/* 取全部家长信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllParentsInfoData */
FetchAllParentsInfosync : function(data,_success,_error)
{
	return this.callfunc("FetchAllParentsInfo",false,data,_success,_error);
},
/* 取全部家长信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllParentsInfoData */
FetchAllParentsInfo : function(data,_success,_error)	
{
	return this.callfunc("FetchAllParentsInfo",true,data,_success,_error);
},
/* 取全部学生获奖信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllActivitysListData */
FetchAllStudentActivityssync : function(data,_success,_error)
{
	return this.callfunc("FetchAllStudentActivitys",false,data,_success,_error);
},
/* 取全部学生获奖信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllActivitysListData */
FetchAllStudentActivitys : function(data,_success,_error)	
{
	return this.callfunc("FetchAllStudentActivitys",true,data,_success,_error);
},
/* 取全部学生基本信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllStudentBaseInfoData */
FetchAllStudentBaseInfosync : function(data,_success,_error)
{
	return this.callfunc("FetchAllStudentBaseInfo",false,data,_success,_error);
},
/* 取全部学生基本信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllStudentBaseInfoData */
FetchAllStudentBaseInfo : function(data,_success,_error)	
{
	return this.callfunc("FetchAllStudentBaseInfo",true,data,_success,_error);
},
/* 取全部学生教育信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllStudentEduData */
FetchAllStudentEdusync : function(data,_success,_error)
{
	return this.callfunc("FetchAllStudentEdu",false,data,_success,_error);
},
/* 取全部学生教育信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllStudentEduData */
FetchAllStudentEdu : function(data,_success,_error)	
{
	return this.callfunc("FetchAllStudentEdu",true,data,_success,_error);
},
/* 取全部学生获奖信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllHonorsListData */
FetchAllStudentHonorssync : function(data,_success,_error)
{
	return this.callfunc("FetchAllStudentHonors",false,data,_success,_error);
},
/* 取全部学生获奖信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllHonorsListData */
FetchAllStudentHonors : function(data,_success,_error)	
{
	return this.callfunc("FetchAllStudentHonors",true,data,_success,_error);
},
/* 取全部学生基本信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllStudentInfosData */
FetchAllStudentInfossync : function(data,_success,_error)
{
	return this.callfunc("FetchAllStudentInfos",false,data,_success,_error);
},
/* 取全部学生基本信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllStudentInfosData */
FetchAllStudentInfos : function(data,_success,_error)	
{
	return this.callfunc("FetchAllStudentInfos",true,data,_success,_error);
},
/* 取全部学生获奖信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllWorkingexperienceListData */
FetchAllStudentWorkingexpericessync : function(data,_success,_error)
{
	return this.callfunc("FetchAllStudentWorkingexperices",false,data,_success,_error);
},
/* 取全部学生获奖信息，含英文 */
/* 入参BasicParameterData */
/* 出参AllWorkingexperienceListData */
FetchAllStudentWorkingexperices : function(data,_success,_error)	
{
	return this.callfunc("FetchAllStudentWorkingexperices",true,data,_success,_error);
},
/* 老师取所有学生的最新成绩，老师首页最新的更新成绩 */
/* 入参BasicParameterData */
/* 出参AllTestsData */
FetchAllTestsScoresync : function(data,_success,_error)
{
	return this.callfunc("FetchAllTestsScore",false,data,_success,_error);
},
/* 老师取所有学生的最新成绩，老师首页最新的更新成绩 */
/* 入参BasicParameterData */
/* 出参AllTestsData */
FetchAllTestsScore : function(data,_success,_error)	
{
	return this.callfunc("FetchAllTestsScore",true,data,_success,_error);
},
/* 取最近的考试，学生日程管理，考试规划，学生用 */
/* 入参PageBasicParameterData */
/* 出参RecentTestPageListData */
FetchAllTestssync : function(data,_success,_error)
{
	return this.callfunc("FetchAllTests",false,data,_success,_error);
},
/* 取最近的考试，学生日程管理，考试规划，学生用 */
/* 入参PageBasicParameterData */
/* 出参RecentTestPageListData */
FetchAllTests : function(data,_success,_error)	
{
	return this.callfunc("FetchAllTests",true,data,_success,_error);
},
/* 取日程用于编辑 */
/* 入参BasicParameterData */
/* 出参AssignTaskData */
FetchAssignedTasksync : function(data,_success,_error)
{
	return this.callfunc("FetchAssignedTask",false,data,_success,_error);
},
/* 取日程用于编辑 */
/* 入参BasicParameterData */
/* 出参AssignTaskData */
FetchAssignedTask : function(data,_success,_error)	
{
	return this.callfunc("FetchAssignedTask",true,data,_success,_error);
},
/* 取学校对应的checklist项列表，申请追踪界面 */
/* 入参BasicStudentParameterData */
/* 出参ChecklistDetailItemListData */
FetchCollegeCheckListsync : function(data,_success,_error)
{
	return this.callfunc("FetchCollegeCheckList",false,data,_success,_error);
},
/* 取学校对应的checklist项列表，申请追踪界面 */
/* 入参BasicStudentParameterData */
/* 出参ChecklistDetailItemListData */
FetchCollegeCheckList : function(data,_success,_error)	
{
	return this.callfunc("FetchCollegeCheckList",true,data,_success,_error);
},
/* 取学校列表 */
/* 入参CollegeListConditionData */
/* 出参collegeListData */
FetchCollegeListsync : function(data,_success,_error)
{
	return this.callfunc("FetchCollegeList",false,data,_success,_error);
},
/* 取学校列表 */
/* 入参CollegeListConditionData */
/* 出参collegeListData */
FetchCollegeList : function(data,_success,_error)	
{
	return this.callfunc("FetchCollegeList",true,data,_success,_error);
},
/* 老师取待处理checklist，老师首页最新checklist */
/* 入参PageBasicClazzParameterData */
/* 出参ChecklistDetailItemPageListData */
FetchConselorChecklistssync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorChecklists",false,data,_success,_error);
},
/* 老师取待处理checklist，老师首页最新checklist */
/* 入参PageBasicClazzParameterData */
/* 出参ChecklistDetailItemPageListData */
FetchConselorChecklists : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorChecklists",true,data,_success,_error);
},
/* 取班级内的所有学生，老师学生信息的学生列表 */
/* 入参SearchStudentData */
/* 出参StudentSimpleInfoPageListData */
FetchConselorClazzStudentSimpleInfossync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorClazzStudentSimpleInfos",false,data,_success,_error);
},
/* 取班级内的所有学生，老师学生信息的学生列表 */
/* 入参SearchStudentData */
/* 出参StudentSimpleInfoPageListData */
FetchConselorClazzStudentSimpleInfos : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorClazzStudentSimpleInfos",true,data,_success,_error);
},
/* 取班级内的所有学生，老师学生信息的学生列表 */
/* 入参BasicParameterData */
/* 出参clazzListData */
FetchConselorClazzssync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorClazzs",false,data,_success,_error);
},
/* 取班级内的所有学生，老师学生信息的学生列表 */
/* 入参BasicParameterData */
/* 出参clazzListData */
FetchConselorClazzs : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorClazzs",true,data,_success,_error);
},
/* 老师取所有学生的最近某天的任务，老师首页未来7天事件 */
/* 入参FecthCounselorTaskByDateData */
/* 出参StudentTaskListData */
FetchConselorEventsByDatesync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorEventsByDate",false,data,_success,_error);
},
/* 老师取所有学生的最近某天的任务，老师首页未来7天事件 */
/* 入参FecthCounselorTaskByDateData */
/* 出参StudentTaskListData */
FetchConselorEventsByDate : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorEventsByDate",true,data,_success,_error);
},
/* 老师取所有学生的最新成绩，老师首页最新的更新成绩 */
/* 入参PageBasicParameterData */
/* 出参RecentTestPageListData */
FetchConselorNewTestsScoresync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorNewTestsScore",false,data,_success,_error);
},
/* 老师取所有学生的最新成绩，老师首页最新的更新成绩 */
/* 入参PageBasicParameterData */
/* 出参RecentTestPageListData */
FetchConselorNewTestsScore : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorNewTestsScore",true,data,_success,_error);
},
/* 老师取所有学生的最近7天的任务，老师首页未来7天事件 */
/* 入参BasicParameterData */
/* 出参DayTaskListListData */
FetchConselorRecentWeekEventssync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorRecentWeekEvents",false,data,_success,_error);
},
/* 老师取所有学生的最近7天的任务，老师首页未来7天事件 */
/* 入参BasicParameterData */
/* 出参DayTaskListListData */
FetchConselorRecentWeekEvents : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorRecentWeekEvents",true,data,_success,_error);
},
/* 老师取所有学生，老师首页学生列表 */
/* 入参PageBasicParameterData */
/* 出参StudentSimpleInfoListData */
FetchConselorStudentSimpleInfossync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorStudentSimpleInfos",false,data,_success,_error);
},
/* 老师取所有学生，老师首页学生列表 */
/* 入参PageBasicParameterData */
/* 出参StudentSimpleInfoListData */
FetchConselorStudentSimpleInfos : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorStudentSimpleInfos",true,data,_success,_error);
},
/* 取班级内的所有学生，老师学生信息的学生列表 */
/* 入参BasicParameterData */
/* 出参studentListData */
FetchConselorStudentsByClazzsync : function(data,_success,_error)
{
	return this.callfunc("FetchConselorStudentsByClazz",false,data,_success,_error);
},
/* 取班级内的所有学生，老师学生信息的学生列表 */
/* 入参BasicParameterData */
/* 出参studentListData */
FetchConselorStudentsByClazz : function(data,_success,_error)	
{
	return this.callfunc("FetchConselorStudentsByClazz",true,data,_success,_error);
},
/* 取待分配的文件 */
/* 入参BasicStudentParameterData */
/* 出参applyfileListData */
FetchFilelistForAssignsync : function(data,_success,_error)
{
	return this.callfunc("FetchFilelistForAssign",false,data,_success,_error);
},
/* 取待分配的文件 */
/* 入参BasicStudentParameterData */
/* 出参applyfileListData */
FetchFilelistForAssign : function(data,_success,_error)	
{
	return this.callfunc("FetchFilelistForAssign",true,data,_success,_error);
},
/* 取文件夹下的文件列表 */
/* 入参PageBasicStudentParameterData */
/* 出参applyfilePageListData */
FetchFilesByFoldersync : function(data,_success,_error)
{
	return this.callfunc("FetchFilesByFolder",false,data,_success,_error);
},
/* 取文件夹下的文件列表 */
/* 入参PageBasicStudentParameterData */
/* 出参applyfilePageListData */
FetchFilesByFolder : function(data,_success,_error)	
{
	return this.callfunc("FetchFilesByFolder",true,data,_success,_error);
},
/* 取文件夹列表 */
/* 入参BasicParameterData */
/* 出参FolderInfoListData */
FetchFolderssync : function(data,_success,_error)
{
	return this.callfunc("FetchFolders",false,data,_success,_error);
},
/* 取文件夹列表 */
/* 入参BasicParameterData */
/* 出参FolderInfoListData */
FetchFolders : function(data,_success,_error)	
{
	return this.callfunc("FetchFolders",true,data,_success,_error);
},
/* 取获奖信息 */
/* 入参BasicParameterData */
/* 出参honorsListParamData */
FetchHonorssync : function(data,_success,_error)
{
	return this.callfunc("FetchHonors",false,data,_success,_error);
},
/* 取获奖信息 */
/* 入参BasicParameterData */
/* 出参honorsListParamData */
FetchHonors : function(data,_success,_error)	
{
	return this.callfunc("FetchHonors",true,data,_success,_error);
},
/* 取日程用于编辑 */
/* 入参FecthTaskData */
/* 出参AllTaskData */
FetchOneAllTasksync : function(data,_success,_error)
{
	return this.callfunc("FetchOneAllTask",false,data,_success,_error);
},
/* 取日程用于编辑 */
/* 入参FecthTaskData */
/* 出参AllTaskData */
FetchOneAllTask : function(data,_success,_error)	
{
	return this.callfunc("FetchOneAllTask",true,data,_success,_error);
},
/* 取家庭信息 */
/* 入参BasicParameterData */
/* 出参ParentsInfoData */
FetchParentssync : function(data,_success,_error)
{
	return this.callfunc("FetchParents",false,data,_success,_error);
},
/* 取家庭信息 */
/* 入参BasicParameterData */
/* 出参ParentsInfoData */
FetchParents : function(data,_success,_error)	
{
	return this.callfunc("FetchParents",true,data,_success,_error);
},
/* 取个人偏好 */
/* 入参BasicParameterData */
/* 出参PreferenceInfoData */
FetchPreferencesync : function(data,_success,_error)
{
	return this.callfunc("FetchPreference",false,data,_success,_error);
},
/* 取个人偏好 */
/* 入参BasicParameterData */
/* 出参PreferenceInfoData */
FetchPreference : function(data,_success,_error)	
{
	return this.callfunc("FetchPreference",true,data,_success,_error);
},
/* 取个人偏好 */
/* 入参BasicParameterData */
/* 出参PreferenceTestInfoData */
FetchPreferenceTestsync : function(data,_success,_error)
{
	return this.callfunc("FetchPreferenceTest",false,data,_success,_error);
},
/* 取个人偏好 */
/* 入参BasicParameterData */
/* 出参PreferenceTestInfoData */
FetchPreferenceTest : function(data,_success,_error)	
{
	return this.callfunc("FetchPreferenceTest",true,data,_success,_error);
},
/* 取最近的考试，学生日程管理，考试规划，学生用 */
/* 入参PageBasicParameterData */
/* 出参RecentTestPageListData */
FetchRecentTestssync : function(data,_success,_error)
{
	return this.callfunc("FetchRecentTests",false,data,_success,_error);
},
/* 取最近的考试，学生日程管理，考试规划，学生用 */
/* 入参PageBasicParameterData */
/* 出参RecentTestPageListData */
FetchRecentTests : function(data,_success,_error)	
{
	return this.callfunc("FetchRecentTests",true,data,_success,_error);
},
/* 取家长推荐的大学列表 */
/* 入参BasicParameterData */
/* 出参RecommonedCollegeListData */
FetchRecommendCollegessync : function(data,_success,_error)
{
	return this.callfunc("FetchRecommendColleges",false,data,_success,_error);
},
/* 取家长推荐的大学列表 */
/* 入参BasicParameterData */
/* 出参RecommonedCollegeListData */
FetchRecommendColleges : function(data,_success,_error)	
{
	return this.callfunc("FetchRecommendColleges",true,data,_success,_error);
},
/* 去已选的大学列表，学生家长用 */
/* 入参PageBasicParameterData */
/* 出参SelectedCollegeListData */
FetchSelectedCollegessync : function(data,_success,_error)
{
	return this.callfunc("FetchSelectedColleges",false,data,_success,_error);
},
/* 去已选的大学列表，学生家长用 */
/* 入参PageBasicParameterData */
/* 出参SelectedCollegeListData */
FetchSelectedColleges : function(data,_success,_error)	
{
	return this.callfunc("FetchSelectedColleges",true,data,_success,_error);
},
/* 取学生教育信息 */
/* 入参BasicParameterData */
/* 出参StudentEduInfoData */
FetchStudentEdusync : function(data,_success,_error)
{
	return this.callfunc("FetchStudentEdu",false,data,_success,_error);
},
/* 取学生教育信息 */
/* 入参BasicParameterData */
/* 出参StudentEduInfoData */
FetchStudentEdu : function(data,_success,_error)	
{
	return this.callfunc("FetchStudentEdu",true,data,_success,_error);
},
/* 取学生的最近任务，学生首页，近期安排 */
/* 入参PageBasicParameterData */
/* 出参RecentSimpleTaskListData */
FetchStudentRecentTaskssync : function(data,_success,_error)
{
	return this.callfunc("FetchStudentRecentTasks",false,data,_success,_error);
},
/* 取学生的最近任务，学生首页，近期安排 */
/* 入参PageBasicParameterData */
/* 出参RecentSimpleTaskListData */
FetchStudentRecentTasks : function(data,_success,_error)	
{
	return this.callfunc("FetchStudentRecentTasks",true,data,_success,_error);
},
/* 取学生考试成绩小结信息 */
/* 入参BasicParameterData */
/* 出参StudentMaxScoresData */
FetchStudentScoreSummerysync : function(data,_success,_error)
{
	return this.callfunc("FetchStudentScoreSummery",false,data,_success,_error);
},
/* 取学生考试成绩小结信息 */
/* 入参BasicParameterData */
/* 出参StudentMaxScoresData */
FetchStudentScoreSummery : function(data,_success,_error)	
{
	return this.callfunc("FetchStudentScoreSummery",true,data,_success,_error);
},
/* 取学生信息 */
/* 入参BasicParameterData */
/* 出参studentData */
FetchStudentsync : function(data,_success,_error)
{
	return this.callfunc("FetchStudent",false,data,_success,_error);
},
/* 取学生信息 */
/* 入参BasicParameterData */
/* 出参studentData */
FetchStudent : function(data,_success,_error)	
{
	return this.callfunc("FetchStudent",true,data,_success,_error);
},
/* 取学生的最近任务，分页 */
/* 入参PageBasicStudentParameterData */
/* 出参RecentSimpleTaskPageListData */
FetchStudentSimpleTaskssync : function(data,_success,_error)
{
	return this.callfunc("FetchStudentSimpleTasks",false,data,_success,_error);
},
/* 取学生的最近任务，分页 */
/* 入参PageBasicStudentParameterData */
/* 出参RecentSimpleTaskPageListData */
FetchStudentSimpleTasks : function(data,_success,_error)	
{
	return this.callfunc("FetchStudentSimpleTasks",true,data,_success,_error);
},
/* 取所有待翻译的学生，只管一个班的老师 */
/* 入参PageBasicParameterData */
/* 出参studentPageListData */
FetchSubmitStudentsync : function(data,_success,_error)
{
	return this.callfunc("FetchSubmitStudent",false,data,_success,_error);
},
/* 取所有待翻译的学生，只管一个班的老师 */
/* 入参PageBasicParameterData */
/* 出参studentPageListData */
FetchSubmitStudent : function(data,_success,_error)	
{
	return this.callfunc("FetchSubmitStudent",true,data,_success,_error);
},
/* 取学生的最近任务，分页 */
/* 入参FetchTaskByDateData */
/* 出参taskListData */
FetchTaskByDatesync : function(data,_success,_error)
{
	return this.callfunc("FetchTaskByDate",false,data,_success,_error);
},
/* 取学生的最近任务，分页 */
/* 入参FetchTaskByDateData */
/* 出参taskListData */
FetchTaskByDate : function(data,_success,_error)	
{
	return this.callfunc("FetchTaskByDate",true,data,_success,_error);
},
/* 取所有未提交的学生 */
/* 入参PageBasicParameterData */
/* 出参studentPageListData */
FetchUnsubmitStudentsync : function(data,_success,_error)
{
	return this.callfunc("FetchUnsubmitStudent",false,data,_success,_error);
},
/* 取所有未提交的学生 */
/* 入参PageBasicParameterData */
/* 出参studentPageListData */
FetchUnsubmitStudent : function(data,_success,_error)	
{
	return this.callfunc("FetchUnsubmitStudent",true,data,_success,_error);
},

FetchUserID: function(data, _success, _error)
{
	return this.callfunc("fetchUserID", false, data, _success, _error);
},
/* 取获奖信息 */
/* 入参BasicParameterData */
/* 出参workingexperienceListParamData */
FetchWorkingExperiencesync : function(data,_success,_error)
{
	return this.callfunc("FetchWorkingExperience",false,data,_success,_error);
},
/* 取获奖信息 */
/* 入参BasicParameterData */
/* 出参workingexperienceListParamData */
FetchWorkingExperience : function(data,_success,_error)	
{
	return this.callfunc("FetchWorkingExperience",true,data,_success,_error);
},
/* 登录服务 */
/* 入参LoginUserData */
/* 出参BooleanData */
Loginsync : function(data,_success,_error)
{
	return this.callfunc("Login",false,data,_success,_error);
},
/* 登录服务 */
/* 入参LoginUserData */
/* 出参BooleanData */
Login : function(data,_success,_error)	
{
	return this.callfunc("Login",true,data,_success,_error);
},
/* 登录服务 */
/* 入参LongData */
/* 出参VoidableData */
Logoutsync : function(data,_success,_error)
{
	return this.callfunc("Logout",false,data,_success,_error);
},
/* 登录服务 */
/* 入参LongData */
/* 出参VoidableData */
Logout : function(data,_success,_error)	
{
	return this.callfunc("Logout",true,data,_success,_error);
},
/* 修改用户信息 */
/* 入参userData */
/* 出参VoidableData */
ModifyUserInfosync : function(data,_success,_error)
{
	return this.callfunc("ModifyUserInfo",false,data,_success,_error);
},
/* 修改用户信息 */
/* 入参userData */
/* 出参VoidableData */
ModifyUserInfo : function(data,_success,_error)	
{
	return this.callfunc("ModifyUserInfo",true,data,_success,_error);
},
/* 家长偏好列表，家长用 */
/* 入参PreferenceTestSelectInfoData */
/* 出参PersonalCollegeInfoListPageData */
ParentSelectPreferencesync : function(data,_success,_error)
{
	return this.callfunc("ParentSelectPreference",false,data,_success,_error);
},
/* 家长偏好列表，家长用 */
/* 入参PreferenceTestSelectInfoData */
/* 出参PersonalCollegeInfoListPageData */
ParentSelectPreference : function(data,_success,_error)	
{
	return this.callfunc("ParentSelectPreference",true,data,_success,_error);
},
/* checklist项指定文件操作，学生可用 */
/* 入参ReadAlertMsgData */
/* 出参VoidableData */
ReadAlertMsgsync : function(data,_success,_error)
{
	return this.callfunc("ReadAlertMsg",false,data,_success,_error);
},
/* checklist项指定文件操作，学生可用 */
/* 入参ReadAlertMsgData */
/* 出参VoidableData */
ReadAlertMsg : function(data,_success,_error)	
{
	return this.callfunc("ReadAlertMsg",true,data,_success,_error);
},
/* 推荐学校 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
RecommendCollegesync : function(data,_success,_error)
{
	return this.callfunc("RecommendCollege",false,data,_success,_error);
},
/* 推荐学校 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
RecommendCollege : function(data,_success,_error)	
{
	return this.callfunc("RecommendCollege",true,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AssignTaskData */
/* 出参VoidableData */
RejectAssignTasksync : function(data,_success,_error)
{
	return this.callfunc("RejectAssignTask",false,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AssignTaskData */
/* 出参VoidableData */
RejectAssignTask : function(data,_success,_error)	
{
	return this.callfunc("RejectAssignTask",true,data,_success,_error);
},
/* 老师拒绝 */
/* 入参BasicMessageParameterData */
/* 出参VoidableData */
RejectFormsync : function(data,_success,_error)
{
	return this.callfunc("RejectForm",false,data,_success,_error);
},
/* 老师拒绝 */
/* 入参BasicMessageParameterData */
/* 出参VoidableData */
RejectForm : function(data,_success,_error)	
{
	return this.callfunc("RejectForm",true,data,_success,_error);
},
/* 添加学校 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
RemoveSelectedCollegesync : function(data,_success,_error)
{
	return this.callfunc("RemoveSelectedCollege",false,data,_success,_error);
},
/* 添加学校 */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
RemoveSelectedCollege : function(data,_success,_error)	
{
	return this.callfunc("RemoveSelectedCollege",true,data,_success,_error);
},
/* 保存课外活动信息，学生用 */
/* 入参activitysListParamData */
/* 出参VoidableData */
SaveActivitiessync : function(data,_success,_error)
{
	return this.callfunc("SaveActivities",false,data,_success,_error);
},
/* 保存课外活动信息，学生用 */
/* 入参activitysListParamData */
/* 出参VoidableData */
SaveActivities : function(data,_success,_error)	
{
	return this.callfunc("SaveActivities",true,data,_success,_error);
},
/* 保存学生教育包含英文信息，老师用 */
/* 入参AllStudentEduData */
/* 出参VoidableData */
SaveAllStudentEdusync : function(data,_success,_error)
{
	return this.callfunc("SaveAllStudentEdu",false,data,_success,_error);
},
/* 保存学生教育包含英文信息，老师用 */
/* 入参AllStudentEduData */
/* 出参VoidableData */
SaveAllStudentEdu : function(data,_success,_error)	
{
	return this.callfunc("SaveAllStudentEdu",true,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AllTaskData */
/* 出参VoidableData */
SaveAllTasksync : function(data,_success,_error)
{
	return this.callfunc("SaveAllTask",false,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AllTaskData */
/* 出参VoidableData */
SaveAllTask : function(data,_success,_error)	
{
	return this.callfunc("SaveAllTask",true,data,_success,_error);
},
/* 保存课外活动包含英文信息，老师用 */
/* 入参AllActivitysListData */
/* 出参VoidableData */
SaveAllactivitiessync : function(data,_success,_error)
{
	return this.callfunc("SaveAllactivities",false,data,_success,_error);
},
/* 保存课外活动包含英文信息，老师用 */
/* 入参AllActivitysListData */
/* 出参VoidableData */
SaveAllactivities : function(data,_success,_error)	
{
	return this.callfunc("SaveAllactivities",true,data,_success,_error);
},
/* 保存奖项包含英文信息，老师用 */
/* 入参AllHonorsListData */
/* 出参VoidableData */
SaveAllhonorssync : function(data,_success,_error)
{
	return this.callfunc("SaveAllhonors",false,data,_success,_error);
},
/* 保存奖项包含英文信息，老师用 */
/* 入参AllHonorsListData */
/* 出参VoidableData */
SaveAllhonors : function(data,_success,_error)	
{
	return this.callfunc("SaveAllhonors",true,data,_success,_error);
},
/* 保存家庭包含英文信息，老师用 */
/* 入参AllParentsInfoData */
/* 出参VoidableData */
SaveAllparentsInfosync : function(data,_success,_error)
{
	return this.callfunc("SaveAllparentsInfo",false,data,_success,_error);
},
/* 保存家庭包含英文信息，老师用 */
/* 入参AllParentsInfoData */
/* 出参VoidableData */
SaveAllparentsInfo : function(data,_success,_error)	
{
	return this.callfunc("SaveAllparentsInfo",true,data,_success,_error);
},
/* 保存学生包含英文信息，老师用 */
/* 入参AllStudentBaseInfoData */
/* 出参VoidableData */
SaveAllstudentBaseInfosync : function(data,_success,_error)
{
	return this.callfunc("SaveAllstudentBaseInfo",false,data,_success,_error);
},
/* 保存学生包含英文信息，老师用 */
/* 入参AllStudentBaseInfoData */
/* 出参VoidableData */
SaveAllstudentBaseInfo : function(data,_success,_error)	
{
	return this.callfunc("SaveAllstudentBaseInfo",true,data,_success,_error);
},
/* 保存工作经验包含英文信息，老师用 */
/* 入参AllWorkingexperienceListData */
/* 出参VoidableData */
SaveAllworkingExperiencessync : function(data,_success,_error)
{
	return this.callfunc("SaveAllworkingExperiences",false,data,_success,_error);
},
/* 保存工作经验包含英文信息，老师用 */
/* 入参AllWorkingexperienceListData */
/* 出参VoidableData */
SaveAllworkingExperiences : function(data,_success,_error)	
{
	return this.callfunc("SaveAllworkingExperiences",true,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AssignTaskData */
/* 出参VoidableData */
SaveAssignTasksync : function(data,_success,_error)
{
	return this.callfunc("SaveAssignTask",false,data,_success,_error);
},
/* 保存日程或成绩 */
/* 入参AssignTaskData */
/* 出参VoidableData */
SaveAssignTask : function(data,_success,_error)	
{
	return this.callfunc("SaveAssignTask",true,data,_success,_error);
},
/* 保存学生教育英文信息，老师用 */
/* 入参EnStudentEduInfoData */
/* 出参VoidableData */
SaveEnStudentEdusync : function(data,_success,_error)
{
	return this.callfunc("SaveEnStudentEdu",false,data,_success,_error);
},
/* 保存学生教育英文信息，老师用 */
/* 入参EnStudentEduInfoData */
/* 出参VoidableData */
SaveEnStudentEdu : function(data,_success,_error)	
{
	return this.callfunc("SaveEnStudentEdu",true,data,_success,_error);
},
/* 保存活动英文信息，老师用 */
/* 入参enactivitysListParamData */
/* 出参VoidableData */
 SaveEnactivitiessync : function(data,_success,_error)
{
	return this.callfunc(" SaveEnactivities",false,data,_success,_error);
},
/* 保存活动英文信息，老师用 */
/* 入参enactivitysListParamData */
/* 出参VoidableData */
 SaveEnactivities : function(data,_success,_error)	
{
	return this.callfunc(" SaveEnactivities",true,data,_success,_error);
},
/* 保存奖项英文信息，老师用 */
/* 入参enhonorsListParamData */
/* 出参VoidableData */
SaveEnhonorssync : function(data,_success,_error)
{
	return this.callfunc("SaveEnhonors",false,data,_success,_error);
},
/* 保存奖项英文信息，老师用 */
/* 入参enhonorsListParamData */
/* 出参VoidableData */
SaveEnhonors : function(data,_success,_error)	
{
	return this.callfunc("SaveEnhonors",true,data,_success,_error);
},
/* 保存家庭英文信息，老师用 */
/* 入参EnParentsInfoData */
/* 出参VoidableData */
SaveEnparentsInfosync : function(data,_success,_error)
{
	return this.callfunc("SaveEnparentsInfo",false,data,_success,_error);
},
/* 保存家庭英文信息，老师用 */
/* 入参EnParentsInfoData */
/* 出参VoidableData */
SaveEnparentsInfo : function(data,_success,_error)	
{
	return this.callfunc("SaveEnparentsInfo",true,data,_success,_error);
},
/* 保存学生英文信息，老师用 */
/* 入参enstudentData */
/* 出参VoidableData */
SaveEnstudentBaseInfosync : function(data,_success,_error)
{
	return this.callfunc("SaveEnstudentBaseInfo",false,data,_success,_error);
},
/* 保存学生英文信息，老师用 */
/* 入参enstudentData */
/* 出参VoidableData */
SaveEnstudentBaseInfo : function(data,_success,_error)	
{
	return this.callfunc("SaveEnstudentBaseInfo",true,data,_success,_error);
},
/* 保存工作经验英文信息，老师用 */
/* 入参enworkingexperienceListParamData */
/* 出参VoidableData */
SaveEnworkingExperiencessync : function(data,_success,_error)
{
	return this.callfunc("SaveEnworkingExperiences",false,data,_success,_error);
},
/* 保存工作经验英文信息，老师用 */
/* 入参enworkingexperienceListParamData */
/* 出参VoidableData */
SaveEnworkingExperiences : function(data,_success,_error)	
{
	return this.callfunc("SaveEnworkingExperiences",true,data,_success,_error);
},
/* 保存奖项信息，学生用 */
/* 入参honorsListParamData */
/* 出参VoidableData */
SaveHonorssync : function(data,_success,_error)
{
	return this.callfunc("SaveHonors",false,data,_success,_error);
},
/* 保存奖项信息，学生用 */
/* 入参honorsListParamData */
/* 出参VoidableData */
SaveHonors : function(data,_success,_error)	
{
	return this.callfunc("SaveHonors",true,data,_success,_error);
},
/* 发布公告，老师用 */
/* 入参messageData */
/* 出参VoidableData */
SaveMessgesync : function(data,_success,_error)
{
	return this.callfunc("SaveMessge",false,data,_success,_error);
},
/* 发布公告，老师用 */
/* 入参messageData */
/* 出参VoidableData */
SaveMessge : function(data,_success,_error)	
{
	return this.callfunc("SaveMessge",true,data,_success,_error);
},
/* 保存家庭信息，学生用 */
/* 入参ParentsInfoData */
/* 出参VoidableData */
SaveParentsInfosync : function(data,_success,_error)
{
	return this.callfunc("SaveParentsInfo",false,data,_success,_error);
},
/* 保存家庭信息，学生用 */
/* 入参ParentsInfoData */
/* 出参VoidableData */
SaveParentsInfo : function(data,_success,_error)	
{
	return this.callfunc("SaveParentsInfo",true,data,_success,_error);
},
/* 保存偏好信息，学生用 */
/* 入参PreferenceInfoData */
/* 出参VoidableData */
SavePreferencesync : function(data,_success,_error)
{
	return this.callfunc("SavePreference",false,data,_success,_error);
},
/* 保存偏好信息，学生用 */
/* 入参PreferenceInfoData */
/* 出参VoidableData */
SavePreference : function(data,_success,_error)	
{
	return this.callfunc("SavePreference",true,data,_success,_error);
},
/* 保存学生信息，学生用 */
/* 入参studentData */
/* 出参VoidableData */
SaveStudentBaseInfosync : function(data,_success,_error)
{
	return this.callfunc("SaveStudentBaseInfo",false,data,_success,_error);
},
/* 保存学生信息，学生用 */
/* 入参studentData */
/* 出参VoidableData */
SaveStudentBaseInfo : function(data,_success,_error)	
{
	return this.callfunc("SaveStudentBaseInfo",true,data,_success,_error);
},
/* 保存学生教育信息，学生用 */
/* 入参StudentEduInfoData */
/* 出参VoidableData */
SaveStudentEdusync : function(data,_success,_error)
{
	return this.callfunc("SaveStudentEdu",false,data,_success,_error);
},
/* 保存学生教育信息，学生用 */
/* 入参StudentEduInfoData */
/* 出参VoidableData */
SaveStudentEdu : function(data,_success,_error)	
{
	return this.callfunc("SaveStudentEdu",true,data,_success,_error);
},
/* 保存工作经验信息，学生用 */
/* 入参workingexperienceListParamData */
/* 出参VoidableData */
SaveWorkingExperiencessync : function(data,_success,_error)
{
	return this.callfunc("SaveWorkingExperiences",false,data,_success,_error);
},
/* 保存工作经验信息，学生用 */
/* 入参workingexperienceListParamData */
/* 出参VoidableData */
SaveWorkingExperiences : function(data,_success,_error)	
{
	return this.callfunc("SaveWorkingExperiences",true,data,_success,_error);
},
/* 查询学校列表 */
/* 入参CollegeSearchData */
/* 出参PersonalCollegeInfoListPageData */
SearchCollegesync : function(data,_success,_error)
{
	return this.callfunc("SearchCollege",false,data,_success,_error);
},
/* 查询学校列表 */
/* 入参CollegeSearchData */
/* 出参PersonalCollegeInfoListPageData */
SearchCollege : function(data,_success,_error)	
{
	return this.callfunc("SearchCollege",true,data,_success,_error);
},
/* 偏好列表，学生用 */
/* 入参BasicParameterData */
/* 出参PersonalCollegeInfoListPageData */
SelectPreferencesync : function(data,_success,_error)
{
	return this.callfunc("SelectPreference",false,data,_success,_error);
},
/* 偏好列表，学生用 */
/* 入参BasicParameterData */
/* 出参PersonalCollegeInfoListPageData */
SelectPreference : function(data,_success,_error)	
{
	return this.callfunc("SelectPreference",true,data,_success,_error);
},
/* 保存偏好信息，学生用 */
/* 入参PreferenceTestInfoData */
/* 出参collegeListData */
SelectPreferenceTestsync : function(data,_success,_error)
{
	return this.callfunc("SelectPreferenceTest",false,data,_success,_error);
},
/* 保存偏好信息，学生用 */
/* 入参PreferenceTestInfoData */
/* 出参collegeListData */
SelectPreferenceTest : function(data,_success,_error)	
{
	return this.callfunc("SelectPreferenceTest",true,data,_success,_error);
},
/* 学生驳回老师的翻译 */
/* 入参BasicMessageParameterData */
/* 出参VoidableData */
StudentRejectFormsync : function(data,_success,_error)
{
	return this.callfunc("StudentRejectForm",false,data,_success,_error);
},
/* 学生驳回老师的翻译 */
/* 入参BasicMessageParameterData */
/* 出参VoidableData */
StudentRejectForm : function(data,_success,_error)	
{
	return this.callfunc("StudentRejectForm",true,data,_success,_error);
},
/* 学生提交 */
/* 入参BasicParameterData */
/* 出参VoidableData */
SubmitFormsync : function(data,_success,_error)
{
	return this.callfunc("SubmitForm",false,data,_success,_error);
},
/* 学生提交 */
/* 入参BasicParameterData */
/* 出参VoidableData */
SubmitForm : function(data,_success,_error)	
{
	return this.callfunc("SubmitForm",true,data,_success,_error);
},
/*  */
/* 入参TestParamData */
/* 出参TestReturnData */
TestServicesync : function(data,_success,_error)
{
	return this.callfunc("TestService",false,data,_success,_error);
},
/*  */
/* 入参TestParamData */
/* 出参TestReturnData */
TestService : function(data,_success,_error)	
{
	return this.callfunc("TestService",true,data,_success,_error);
},
/*  */
/* 入参TestParamData1 */
/* 出参TestReturnData1 */
TestService1sync : function(data,_success,_error)
{
	return this.callfunc("TestService1",false,data,_success,_error);
},
/* 老师的翻译完成 */
/* 入参BasicParameterData */
/* 出参VoidableData */
TranslatedFormsync : function(data,_success,_error)
{
	return this.callfunc("TranslatedForm",false,data,_success,_error);
},
/* 老师的翻译完成 */
/* 入参BasicParameterData */
/* 出参VoidableData */
TranslatedForm : function(data,_success,_error)	
{
	return this.callfunc("TranslatedForm",true,data,_success,_error);
},
/* 上传文件，学生用 */
/* 入参UploadFileListData */
/* 出参VoidableData */
UploadFilessync : function(data,_success,_error)
{
	return this.callfunc("UploadFiles",false,data,_success,_error);
},
/* 上传文件，学生用 */
/* 入参UploadFileListData */
/* 出参VoidableData */
UploadFiles : function(data,_success,_error)	
{
	return this.callfunc("UploadFiles",true,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参AddChecklistitemdefData */
/* 出参VoidableData */
AddChecklistitemdefsync : function(data,_success,_error)
{
	return this.callfunc("AddChecklistitemdef",false,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参AddChecklistitemdefData */
/* 出参VoidableData */
AddChecklistitemdef : function(data,_success,_error)	
{
	return this.callfunc("AddChecklistitemdef",true,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参VoidableData */
DeleteChecklistitemdefsync : function(data,_success,_error)
{
	return this.callfunc("DeleteChecklistitemdef",false,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参VoidableData */
DeleteChecklistitemdef : function(data,_success,_error)	
{
	return this.callfunc("DeleteChecklistitemdef",true,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参ChecklistitemsDefData */
FetchAllChecklistdefsync : function(data,_success,_error)
{
	return this.callfunc("FetchAllChecklistdef",false,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参ChecklistitemsDefData */
FetchAllChecklistdef : function(data,_success,_error)	
{
	return this.callfunc("FetchAllChecklistdef",true,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参ModifyChecklistitemdefData */
/* 出参VoidableData */
ModifyChecklistitemdefsync : function(data,_success,_error)
{
	return this.callfunc("ModifyChecklistitemdef",false,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参ModifyChecklistitemdefData */
/* 出参VoidableData */
ModifyChecklistitemdef : function(data,_success,_error)	
{
	return this.callfunc("ModifyChecklistitemdef",true,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参VoidableData */
MoveDownChecklistitemdefsync : function(data,_success,_error)
{
	return this.callfunc("MoveDownChecklistitemdef",false,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参VoidableData */
MoveDownChecklistitemdef : function(data,_success,_error)	
{
	return this.callfunc("MoveDownChecklistitemdef",true,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参VoidableData */
MoveUpChecklistitemdefsync : function(data,_success,_error)
{
	return this.callfunc("MoveUpChecklistitemdef",false,data,_success,_error);
},
/* 取checklist特定学校的checklist定义 */
/* 入参LongData */
/* 出参VoidableData */
MoveUpChecklistitemdef : function(data,_success,_error)	
{
	return this.callfunc("MoveUpChecklistitemdef",true,data,_success,_error);
},
/* counselor check 分类 */
/* 入参CounselorCheckCateData */
/* 出参VoidableData */
ConselorcheckChecklistCatesync : function(data,_success,_error)
{
	return this.callfunc("ConselorcheckChecklistCate",false,data,_success,_error);
},
/* counselor check 分类 */
/* 入参CounselorCheckCateData */
/* 出参VoidableData */
ConselorcheckChecklistCate : function(data,_success,_error)	
{
	return this.callfunc("ConselorcheckChecklistCate",true,data,_success,_error);
},
/* counselor check checklistitem */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
ConselorcheckChecklistItemsync : function(data,_success,_error)
{
	return this.callfunc("ConselorcheckChecklistItem",false,data,_success,_error);
},
/* counselor check checklistitem */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
ConselorcheckChecklistItem : function(data,_success,_error)	
{
	return this.callfunc("ConselorcheckChecklistItem",true,data,_success,_error);
},
/* 取ChecklistItem，按照学校ID */
/* 入参BasicStudentParameterData */
/* 出参ChecklistItemDetailListData */
FetchChecklistItemByCollegeIDsync : function(data,_success,_error)
{
	return this.callfunc("FetchChecklistItemByCollegeID",false,data,_success,_error);
},
/* 取ChecklistItem，按照学校ID */
/* 入参BasicStudentParameterData */
/* 出参ChecklistItemDetailListData */
FetchChecklistItemByCollegeID : function(data,_success,_error)	
{
	return this.callfunc("FetchChecklistItemByCollegeID",true,data,_success,_error);
},
/* 保存申请学校的账户 */
/* 入参applyaccountData */
/* 出参VoidableData */
SaveCollegeAccountsync : function(data,_success,_error)
{
	return this.callfunc("SaveCollegeAccount",false,data,_success,_error);
},
/* 保存申请学校的账户 */
/* 入参applyaccountData */
/* 出参VoidableData */
SaveCollegeAccount : function(data,_success,_error)	
{
	return this.callfunc("SaveCollegeAccount",true,data,_success,_error);
},
/* 学生check checklistitem */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
StudentcheckChecklistItemsync : function(data,_success,_error)
{
	return this.callfunc("StudentcheckChecklistItem",false,data,_success,_error);
},
/* 学生check checklistitem */
/* 入参BasicStudentParameterData */
/* 出参VoidableData */
StudentcheckChecklistItem : function(data,_success,_error)	
{
	return this.callfunc("StudentcheckChecklistItem",true,data,_success,_error);
},

callfunc : function(name,async,data,_success,_error)
{
	var funcname = "http://112.124.28.229/hjservice?name=" + name;
	$.ajax({
    	type:"POST",
    	url:funcname,
    	data:data,
    	async:async,
	contentType: "text/json",
    	success:_success,
    	error:_error
    });
    
   }
}

	function Obj2str(o) {
        if (o == undefined) {
            return "";
        }
        var r = [];
        if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
        if (typeof o == "object") {
            if (!o.sort) {
                for (var i in o)
                {
                	if(o[i] == undefined)
                		continue;
                    r.push("\"" + i + "\":" + Obj2str(o[i]));
                }
                if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                    r.push("toString:" + o.toString.toString());
                }
                r = "{" + r.join() + "}"
            } else {
                for (var i = 0; i < o.length; i++)
                    r.push(Obj2str(o[i]))
                r = "[" + r.join() + "]";
            }
            return r;
        }
        return o.toString().replace(/\"\:/g, '":""');
    }
	

	
