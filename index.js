document.addEventListener('DOMContentLoaded', () => {
    let passwordLength = document.getElementById("passwordLength");
    let password = document.getElementById("password");
    let savePasswordButton = document.getElementById("savePasswordButton")

    const generatePassword = (len) => {
        const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
        const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numerik = "0123456789";
        const symbol = "-=[];',./!@#$%^&*()_+{}:<>?|€£¥¢©®™§¶∞µ•÷°";

        const data = lowerAlphabet + upperAlphabet + numerik + symbol;
        let generator = '';
        for (let index = 0; index < len; index++) {
            generator += data[Math.floor(Math.random() * data.length)];
        }

        return generator;
    }

    const getPassword = () => {
        const length = parseInt(passwordLength.value) || 12; 
        const newPassword = generatePassword(length);
        password.value = newPassword;
        setTimeout(() => {
            alert('Password has been generated!');
        }, 1000);
    }

    const savePassword = () => {
        document.title = password.value;
        savePasswordButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent (`password saya: ${document.title}`))
        savePasswordButton.setAttribute('download', 'MyPasswordGenerator.txt')
        setTimeout(() => {
            alert('Berhasil disimpan!');
        }, 1000)
    }

    document.getElementById("generatePasswordButton").addEventListener("click", getPassword);
    document.getElementById("savePasswordButton").addEventListener("click", savePassword);
});
