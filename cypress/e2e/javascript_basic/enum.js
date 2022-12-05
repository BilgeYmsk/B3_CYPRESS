
const browsers = {

    CHROME: 'chrome',
    FF: 'firefox',
    EDGE: 'edge',
    ELECTRON: 'electron'
}

let browser = browsers.CHROME

function execute() { //switch statement ya da if statement olabilir

    switch (browser) {

        case browsers.CHROME:
            console.log('execute on chrome')
            break
        case browsers.EDGE:
            console.log('execute on edge')
            break
        case browsers.FF:
            console.log('execute on firefox')
            break
        case browsers.ELECTRON:
            console.log('execute on electron')
            break

    }


}

console.log(execute())