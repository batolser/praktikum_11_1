
class UserInfo {
  constructor(/*name, job*/container) {
    this.container = container;
    this.userName = document.querySelector('.user-info__name');
    this.userJob = document.querySelector('.user-info__job');
    this.name = this.userName.textContent;
    this.job = this.userJob.textContent;

  /*  api.getUser()
    .then(user => {
      this.name.textContent = user.name;
      this.job.textContent = user.about;
    });*/


  }
  setUserInfo(name, job) {
    this.name = name;
    this.job = job;
  }
  updateUserInfo() {
    this.userName.textContent = this.name;
    this.userJob.textContent = this.job;
  }
}



