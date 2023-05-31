import Layout from '../components/Layout'

export default function EventPage() {
    return (
        <Layout>
            <div className=" border-mountain-blue text-left h-auto border-2 pl-12 pt-6 pb-6 pr-12 rounded-lg flex flex-col items-center justify-center bg-gradient-to-b from-blue to-dark-blue bg-opacity-60">
                <div> None scheduled</div>
                <div>Past events</div>
            </div>
        </Layout>
    )
}
