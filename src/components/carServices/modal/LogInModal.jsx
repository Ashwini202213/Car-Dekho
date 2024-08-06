import CustomModal from "./CustomModal";

export default function LogInModal() {
    return (
        <div>
            <CustomModal
                className='challanCheckBtn'
                modalBtnName='View Challan Details'
                modalTitle="Login or Register"
                data={[{ head: 'Name', content: 'carDekho' },

                ]} />
        </div>
    )
}