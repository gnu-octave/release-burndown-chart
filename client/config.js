/**
 * Save variables to local browser storage
 */
function initLocalStorage() {

if (!localStorage.getItem("apiURL")) {
     localStorage.setItem("apiURL",
                          "https://octave.space/savannah/api.php");
}

if (!localStorage.getItem("defaultQuery")) {
     localStorage.setItem("defaultQuery",
                          "Action=get&OpenClosed=open&TrackerID=bugs&OrderBy=TrackerID,!ItemID&Limit=5&Format=HTMLCSS");
}

var savedQueries = [
  {label: 'Octave 6',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&Release=6&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=221&advsrch=1&resolution_id%5B%5D=0&bug_group_id%5B%5D=0&status_id%5B%5D=1&priority%5B%5D=0&severity%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&category_id%5B%5D=113&release_id%5B%5D=173&release_id%5B%5D=174&platform_version_id%5B%5D=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=25&history_date_monthfd=2&history_date_yearfd=2021&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Severity >= 4',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&Severity=4,5,6&Status!=Wont&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=100&resolution_id%5B%5D=1&resolution_id%5B%5D=102&resolution_id%5B%5D=103&resolution_id%5B%5D=10&resolution_id%5B%5D=9&resolution_id%5B%5D=4&resolution_id%5B%5D=11&resolution_id%5B%5D=8&resolution_id%5B%5D=6&resolution_id%5B%5D=7&resolution_id%5B%5D=2&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=0&severity%5B%5D=7&severity%5B%5D=8&severity%5B%5D=9&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Crashes',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&ItemGroup=Segfault&Status!=Wont&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=100&resolution_id%5B%5D=1&resolution_id%5B%5D=102&resolution_id%5B%5D=103&resolution_id%5B%5D=10&resolution_id%5B%5D=9&resolution_id%5B%5D=4&resolution_id%5B%5D=11&resolution_id%5B%5D=8&resolution_id%5B%5D=6&resolution_id%5B%5D=7&resolution_id%5B%5D=2&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=101&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Configuration and Build System',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category=Configuration&Status!=Wont&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=100&resolution_id%5B%5D=1&resolution_id%5B%5D=102&resolution_id%5B%5D=103&resolution_id%5B%5D=10&resolution_id%5B%5D=9&resolution_id%5B%5D=4&resolution_id%5B%5D=11&resolution_id%5B%5D=8&resolution_id%5B%5D=6&resolution_id%5B%5D=7&resolution_id%5B%5D=2&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=103&bug_group_id%5B%5D=0&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Build Failures',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&ItemGroup=Build Failure&Status!=Wont&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=100&resolution_id%5B%5D=1&resolution_id%5B%5D=102&resolution_id%5B%5D=103&resolution_id%5B%5D=10&resolution_id%5B%5D=9&resolution_id%5B%5D=4&resolution_id%5B%5D=11&resolution_id%5B%5D=8&resolution_id%5B%5D=6&resolution_id%5B%5D=7&resolution_id%5B%5D=2&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=105&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Regressions',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&ItemGroup=Regression&Status!=Wont&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=100&resolution_id%5B%5D=1&resolution_id%5B%5D=102&resolution_id%5B%5D=103&resolution_id%5B%5D=10&resolution_id%5B%5D=9&resolution_id%5B%5D=4&resolution_id%5B%5D=11&resolution_id%5B%5D=8&resolution_id%5B%5D=6&resolution_id%5B%5D=7&resolution_id%5B%5D=2&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=111&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Bugs with Patch submitted',
   api:   'TrackerID=bugs&Category!=Forge,website&Status=Submitted&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=102&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=0&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Bugs with Patch reviewed',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&Status=Reviewed',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=103&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=0&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Ready for test',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&Status=Ready&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=10&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=0&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=10&history_date_monthfd=12&history_date_yearfd=2019&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Bugs not fixed for the next Octave release',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=bugs&Category!=Forge,website&Status=Postponed&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/bugs/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=4&submitted_by%5B%5D=0&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=110&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=104&category_id%5B%5D=105&category_id%5B%5D=106&category_id%5B%5D=107&category_id%5B%5D=103&category_id%5B%5D=114&category_id%5B%5D=112&category_id%5B%5D=109&bug_group_id%5B%5D=0&severity%5B%5D=0&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=26&history_date_monthfd=10&history_date_yearfd=2020&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Patch tracker patches submitted',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=patch&Category!=Forge,website&Status=None,Ready,Progress,Info,Bug&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/patch/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=100&resolution_id%5B%5D=10&resolution_id%5B%5D=9&resolution_id%5B%5D=8&resolution_id%5B%5D=101&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=103&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=18&history_date_monthfd=1&history_date_yearfd=2020&chunksz=100&spamscore=5&boxoptionwanted=1#options'},
  {label: 'Patches not included for the next Octave release',
   api:   'Action=get&Format=HTMLCSS&OpenClosed=open&TrackerID=patch&Category!=Forge,website&Status=Postponed&Columns=ItemID,Title,SubmittedOn,LastComment,Category,Severity,Priority,ItemGroup,Status,AssignedTo,Release,OperatingSystem',
   url:   'https://savannah.gnu.org/patch/index.php?go_report=Apply&group=octave&func=browse&set=custom&msort=0&report_id=101&advsrch=1&status_id%5B%5D=1&resolution_id%5B%5D=4&assigned_to%5B%5D=0&category_id%5B%5D=100&category_id%5B%5D=101&category_id%5B%5D=102&category_id%5B%5D=103&priority%5B%5D=0&summary=&details=&sumORdet=0&history_search=0&history_field=0&history_event=modified&history_date_dayfd=9&history_date_monthfd=2&history_date_yearfd=2020&chunksz=100&spamscore=5&boxoptionwanted=1#options'}
];

if (!localStorage.getItem("savedQueries")) {
     localStorage.setItem("savedQueries", JSON.stringify(savedQueries));
}
}

initLocalStorage();