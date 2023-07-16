
class Notification {

    success(message) {
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: message,
            timeout: 4000,
        }).show();
    }

    error(message) {
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: message,
            timeout: 4000,
        }).show();
    }

    alert(message) {
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: message,
            timeout: 4000,
        }).show();
    }

    warning(message) {
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: message,
            timeout: 4000,
        }).show();
    }

}

export default Notification = new Notification()