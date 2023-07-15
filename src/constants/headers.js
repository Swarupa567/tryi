import { Button, ButtonGroup } from '@chakra-ui/react'
 
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
    },
    {
        name:'Name',
        selector: rows => rows.name,
        sortable: true,
    },
    {
        name: 'Source',
        selector: rows => rows.source,
        sortable: true,
    },
    {
        name:'Status',
        selector: rows => rows.status,
        sortable: true,
       
    },
    {
       name: 'Select',
       selector: rows => rows.select,
       sortable: true,
       cell: (row) => (
        <Button>
            Select
        </Button>
    ),
    }
];