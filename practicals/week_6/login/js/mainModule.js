var mainModule = (function () {

    function addLoginButtonListener() {

        document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {

            //procitati podatke iz formulara
            var formData = UIModule.getFormData();

            //validirati podatke
            var validationResult = UIModule.validateData(formData.username, formData.password);

            if (validationResult == UIModule.status.MISSING_DATA) {
                UIModule.setError(UIModule.status.MISSING_DATA);
                return;
            }

            //proveriti da li korisnik postoji
            var checkUsernameAndPasswordResult = dataModule.checkUsernameAndPassword(formData.username, formData.password);
            if (checkUsernameAndPasswordResult == false) {
                UIModule.setError(UIModule.status.WRONG_DATA);
                return;
            }

            UIModule.setError(UIModule.status.OK);

        });
    }

    return {
        init: function () {
            console.log("lets go...");
            addLoginButtonListener();
        }
    }

})(UIModule, dataModule);

mainModule.init();