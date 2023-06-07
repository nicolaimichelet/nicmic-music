import Layout from '../components/Layout'

export default function EventPage() {
    return (
        <Layout>
            <div className=" min-w-[40%] border-mountain-blue text-left h-auto border-2 pl-12 pt-6 pb-6 pr-12 rounded-lg flex flex-col items-start justify-center bg-gradient-to-b from-mountain-blue to-nicmic-black-blue">
                <div className="m-4">
                    <h1 className="text-xl mb-4">Upcoming</h1>
                    <p>None scheduled</p>
                    <p className="mt-2 text-xs">
                        Sign up for the newsletter to get notified on upcoming
                        events
                    </p>
                </div>
                <div className="m-4">
                    <h1 className="text-xl mt-4">Past</h1>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-48 h-64 flex items-start justify-center donotforgetrelease bg-no-repeat bg-cover bg-center">
                            <p className="text-sm mt-8 m-2 text-center">
                                {`don't forget me`} <br></br> release party
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
