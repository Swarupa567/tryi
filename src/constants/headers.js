import { Button, ButtonGroup, Tooltip } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import Image from 'next/image';
import fialed from '../../public/no-entry.png';
import waiting from '../../public/pause.png';
import paid from '../../public/checked.png';
import {  CheckIcon, CloseIcon, TimeIcon, EditIcon, DeleteIcon, ViewIcon, EmailIcon} from '@chakra-ui/icons'
import { BsPerson } from "react-icons/bs";
import {BiLogoAirbnb} from 'react-icons/bi';
import {TbBrandBooking} from 'react-icons/tb';
import {PiDotsSixVerticalThin} from 'react-icons/pi';
import { IconContext } from "react-icons";

export const columns = [
    {
        name: 'TimeStamp',
        selector: rows => rows.timestamp,
        sortable: true,
    },
    {
        name: 'Purchase ID',
        selector: rows => rows.purchaseid,
        sortable: true,

    },
 
    {
        name:'Mail',
        selector: rows => rows.mail,
        sortable: true,
        cell:((rows) => {
            return <div>
               <EmailIcon /> {rows.mail} 
            </div>
    }
        ),

    },
    {
        name:'Name',
        selector: rows => rows.name,
        sortable: true,
        cell:((rows) => {
            return <div style={{display:'flex'}}>  
          <AvatarGroup spacing='1rem'>
  <Avatar bg='red.500' icon={<BsPerson fontSize='1rem' />} />
</AvatarGroup><span style={{ marginTop: '12px',
    marginLeft: '3px'}}>{rows.name}</span></div>
        })
    },
    {
        name: 'Source',
        selector: rows => rows.source,
        sortable: true,
        cell:((rows) =>{
            if(rows.source === "airbnb"){
                return <div style={{display:'flex'}}>
                <IconContext.Provider value={{ color: "white", bg:'red', className: "global-class-name" }}>
            <Avatar icon={<BiLogoAirbnb fontSize='1rem'/>}/><span style={{ marginTop: '12px',
    marginLeft: '3px'}}> {rows.source}</span>
    </IconContext.Provider>
            </div>
            }
            else if (rows.source === "booking"){
                return <div style={{display:'flex'}}>
                  <IconContext.Provider value={{ color: "white", bg:'red', className: "global-class-name" }}>
            <Avatar icon={<TbBrandBooking fontSize='1rem'/>}/><span style={{ marginTop: '12px',
    marginLeft: '3px'}}> {rows.source}</span>
    </IconContext.Provider>
                </div>
            }
            else
            return <div style={{display:'flex'}}>
            <IconContext.Provider value={{ color: "white", bg:'red', className: "global-class-name" }}>
      <Avatar icon={<PiDotsSixVerticalThin fontSize='1rem'/>}/><span style={{ marginTop: '12px',
marginLeft: '3px'}}> {rows.source}</span>
</IconContext.Provider>
          </div>
           
        })

    },
    {
        name:'Status',
        selector: rows => rows.status,
        sortable: true,
        center:true,
        cell:((rows) => {
            if(rows.status === "Failed"){
            return <div>
                    <>
                     <CheckIcon />
                   <span style={{ marginTop: '12px',marginLeft: '3px'}}>
                      {rows.status}
                  </span>
                    </>
                </div>
            }
                else if (rows.status === "Waiting"){
                    return <div>
                    <>
                     <TimeIcon />
                    <span style={{ marginTop: '12px',marginLeft: '3px'}}>
                    {rows.status}
                </span>
                    </>  
                    </div>
                }
                else 
                return <div>
                <>
                <CloseIcon />
                <span style={{ marginTop: '12px',marginLeft: '3px'}}>
                    {rows.status}
                </span>
                </>
               </div>}),
        conditionalCellStyles: [
            			{
            				when: rows => rows.status === "Paid",
            				style: {
                                cell:() => <CheckIcon />,
            					backgroundColor: 'rgb(144, 238, 144)',
            					color: 'green',
                                margin: '27px',
                                borderRadius: '21px',
                                padding:'4px',
            					'&:hover': {
            						cursor: 'pointer',
            					},
            				},
            			},
            			{
            				when: rows => rows.status === "Waiting",
                            cell: () => <CloseIcon />,
            				style: {
            					backgroundColor: '#e0cb7e',
            					color: 'white',
                                margin: '27px',
                                borderRadius: '21px',
                                padding:'4px',
            					'&:hover': {
            						cursor: 'pointer',
            					},
            				},
            			},
            			{
            				when: rows => rows.status ===  "Failed",
                            cell:() => <TimeIcon />,
            				style: {
            					backgroundColor: 'rgb(221 137 137 / 90%)' ,
            					color: '#7a0d0d',
                                margin: '27px',
                                borderRadius: '21px',
                                padding:'4px',
            					'&:hover': {
            						cursor: 'not-allowed',
            					},
            				},
                        			},
]
    },

    {
        name:'',
        sortable:false,
        cell:() => <Tooltip label="Details"><ViewIcon boxSize={5}/></Tooltip>
   },
   {
    name:'',
    sortable:false,
    cell:() => <Tooltip label='Edit User'><EditIcon boxSize={5}/></Tooltip>
   },
   {
    name:'',
    sortable:false,
    cell:() => <Tooltip label='Delete User'><DeleteIcon boxSize={5} color='pink.600'/></Tooltip>
   },
  
];