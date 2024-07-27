import Arrow from "../Common/Arrow";
import CustomModal from "./CustomModal";

export default function VenderModal() {
    return (
        <div>
            <CustomModal
                className='btnBg'
                modalBtnName='view Vender information'
                component={<Arrow />}
                modalTitle="Vender Information"
                data={[{ head: 'Name', content: 'carDekho' },
                { head: 'Email', content: 'support@cardekho.com' },
                { head: 'Contact Number', content: '18002003000' },
                { head: 'Address', content: 'Girnar Software Pvt. Ltd., JTM, Model Town, Near Jagatpura Flyover, Jaipur -302017' }
                ]} />
        </div>
    )
}