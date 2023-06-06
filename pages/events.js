import Layout from '../components/Layout'

export default function EventPage() {
    return (
        <Layout>
            <div className=" min-w-[40%] border-mountain-blue text-left h-auto border-2 pl-12 pt-6 pb-6 pr-12 rounded-lg flex flex-col items-start justify-center bg-gradient-to-b from-mountain-blue to-nicmic-black-blue">
                <div>
                    <h1 className="text-xl">Upcoming</h1>
                    <p>None scheduled</p>
                </div>
                <div>
                    <h1 className="text-xl mt-4">Past</h1>
                    <p>Release party</p>
                </div>
            </div>
        </Layout>
    )
}
