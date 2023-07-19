import { Tooltip } from '@chakra-ui/react';
import { Avatar,  AvatarGroup } from '@chakra-ui/react';
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
              <Avatar bg='red.500' boxSize='2.15rem' icon={<BsPerson fontSize='0.8rem' />} />
          </AvatarGroup><span style={{ marginTop: '6px', marginLeft: '3px'}}>{rows.name}</span></div>
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
                    <Avatar boxSize='2.15rem' icon={<BiLogoAirbnb fontSize='0.8rem'/>}/><span style={{ marginTop: '6px',marginLeft: '3px'}}> {rows.source}</span>
                </IconContext.Provider>
            </div>
            }
            else if (rows.source === "booking"){
                return <div style={{display:'flex'}}>
                  <IconContext.Provider value={{ color: "white", bg:'red', className: "global-class-name" }}>
                    <Avatar boxSize='2.15rem' icon={<TbBrandBooking fontSize='0.8rem'/>}/><span style={{ marginTop: '6px',marginLeft: '3px'}}> {rows.source}</span>
                  </IconContext.Provider>
                </div>
            }
            else
            return <div style={{display:'flex'}}>
            <IconContext.Provider value={{ color: "white", bg:'red', className: "global-class-name" }}>
                  <Avatar boxSize='2.15rem' icon={<PiDotsSixVerticalThin fontSize='0.8rem'/>}/><span style={{ marginTop: '6px',marginLeft: '3px'}}> {rows.source}</span>
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
                     <CloseIcon />
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
                <CheckIcon />
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
        cell:() => <Tooltip label="Details"><ViewIcon boxSize={4}/></Tooltip>
   },
   {
    name:'',
    sortable:false,
    cell:() => <Tooltip label='Edit User'><EditIcon boxSize={4}/></Tooltip>
   },
   {
    name:'',
    sortable:false,
    cell:() => <Tooltip label='Delete User'><DeleteIcon boxSize={4} color='pink.600'/></Tooltip>
   },
];