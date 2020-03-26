class PopupEditUser extends PopupWithForm {
    constructor(popup, classUserInfo, button, api) {
        super(popup);
        this.classUserInfo = classUserInfo;
        this.button = button;
        this.api = api;
    }

    /* getApiInfo(){
         this.form.querySelector('.popup__input_type_name').value = classUserInfo.name.textContent;
       this.form.querySelector('.popup__input_type_job').value = classUserInfo.job.textContent;
     }*/
    open() {
        super.open();

        this.classUserInfo.updateUserInfo();
        this.form.querySelector('.popup__input_type_name').value = this.classUserInfo.name;
        this.form.querySelector('.popup__input_type_job').value = this.classUserInfo.job;
        // this.getFormN = this.classN;
        // this.getFormJ = this.classJ;

    }


    onSubmit(event) {
        //super.onSubmit(event);

        this.button.textContent = 'Идет загрузка';

        this.api.patchUser(
            /*this.classUserInfo.setUserInfo*/
            this.form.querySelector('.popup__input_type_name').value,
            this.form.querySelector('.popup__input_type_job').value,
        )

            //this.api.patchUser(user)
            .then((res) => {
                this.classUserInfo.setUserInf(res.name, res.about);
                this.classUserInfo.updateUserInfo(/*res.name, res.about*/);
                this.button.textContent = 'Сохранить';
                this.popup.close(event);


            });
        //     this.classUserInfo.updateUserInfo(user.name, user.about);
        // this.classUserInfo.updateUserInfo();




        //this.classUserInfo.updateUserInfo();
    }
}