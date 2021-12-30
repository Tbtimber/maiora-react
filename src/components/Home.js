import InstagramEmbed from 'react-instagram-embed';


function MaioraHome() {
    return (
        <div className="content-test">
            <InstagramEmbed
                url='https://www.instagram.com/marie.maiora/?hl=fr'
                clientAccessToken='271319565040108|a5a796a41ff0e71f41581acbdce19f18'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
        </div>
    )
}

export default MaioraHome