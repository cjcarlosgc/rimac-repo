import Header from './Header';

export const Layout = (props: any) => {
    return (
        <div className="app">
            <Header/>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
