javascript:(function() {
  const localStorageData = JSON.parse(localStorage.getItem('rtb_saved_dashboard'));
  const var_projectId = localStorageData.tree.dashboard.currentProject.id;
  const url = `https://miro.com/app/dashboard/?projectId=${var_projectId}`;
  const temp = document.createElement('textarea');
  document.body.appendChild(temp);
  temp.value = url;
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  alert(`Sharing URL ${url} copied to clipboard`);
})();
