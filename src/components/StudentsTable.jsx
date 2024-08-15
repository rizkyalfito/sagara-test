/* eslint-disable react/prop-types */
import { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FaEdit, FaTrash, FaFilter, FaPlus, FaCog } from 'react-icons/fa';
import StudentFormModal from './StudentFormModal';
import FilterModal from './FilterModal';
import data from '../data/students.json';

const StudentsTable = () => {
  const [students, setStudents] = useState(data);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? student.instance === filter : true)
    );
  }, [students, search, filter]);

  const editStudent = useCallback((student) => {
    console.log('Edit student', student);
    // Open modal or navigate to edit page
  }, []);

  const deleteStudent = useCallback((id) => {
    setStudents(students.filter(student => student.id !== id));
  }, [students]);

  const columns = useMemo(() => [
    { 
      Header: 'Name', 
      accessor: 'name',
      Cell: ({ row }) => (
        <div className="flex items-center">
          <img src={row.original.avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
          {row.values.name}
        </div>
      )
    },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Instance', accessor: 'instance' },
    { Header: 'Created At', accessor: 'createdAt' },
    { 
      Header: 'Actions', 
      accessor: 'id', 
      Cell: ({ value }) => (
        <div className="flex gap-2">
          <button
            className="bg-[#A51535] text-white p-2 rounded-lg hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-sm"
            onClick={() => editStudent(students.find(student => student.id === value))}
          >
            <FaEdit />
          </button>
          <button
            className="bg-[#A51535] text-white p-2 rounded-lg hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-sm"
            onClick={() => deleteStudent(value)}
          >
            <FaTrash />
          </button>
        </div>
      )
    }
  ], [editStudent, deleteStudent, students]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    setPageSize,
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageOptions
  } = useTable(
    {
      columns,
      data: filteredStudents,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  if (!students) return <p>No data available</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-2">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        {/* Left Side: Filter and Add User */}
        <div className="flex gap-2 flex-wrap">
          <button
            className="bg-[#A51535] text-white p-2 rounded-lg flex items-center hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-base"
            onClick={() => setOpenFilterModal(true)}
          >
            <FaFilter className="mr-2" /> Filter
          </button>
          <button
            className="bg-[#A51535] text-white p-2 rounded-lg flex items-center hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-base"
            onClick={() => setOpenAddModal(true)}
          >
            <FaPlus className="mr-2" /> Add User
          </button>
        </div>
        {/* Right Side: Search and Settings */}
        <div className="flex gap-2 flex-wrap mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="p-2 border rounded-lg text-xs sm:text-base"
          />
          <button
            className="bg-[#A51535] text-white p-2 rounded-lg flex items-center hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-base"
            onClick={() => console.log('Settings clicked')}
          >
            <FaCog className="mr-2" /> Settings
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-2 py-1 sm:px-4 sm:py-2 border-b border-gray-300 dark:border-gray-700 flex items-center"
                    key={column.id}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ' ⇅'}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={row.id}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="px-2 py-1 sm:px-4 sm:py-2" key={cell.column.id}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-base">
        <div className="flex gap-2">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="bg-[#A51535] text-white p-2 rounded-lg hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-sm"
          >
            {'<<'}
          </button>
          <button
            onClick={() => gotoPage(pageIndex - 1)}
            disabled={!canPreviousPage}
            className="bg-[#A51535] text-white p-2 rounded-lg hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-sm"
          >
            Previous
          </button>
          <span>
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
          <button
            onClick={() => gotoPage(pageIndex + 1)}
            disabled={!canNextPage}
            className="bg-[#A51535] text-white p-2 rounded-lg hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-sm"
          >
            Next
          </button>
          <button
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
            className="bg-[#A51535] text-white p-2 rounded-lg hover:bg-[#8e1218] focus:ring-4 focus:ring-[#A51535]/50 text-xs sm:text-sm"
          >
            {'>>'}
          </button>
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-1 text-xs sm:text-sm"
        >
          {[10, 20, 30].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>

      {/* Modals */}
      <StudentFormModal open={openAddModal} onClose={() => setOpenAddModal(false)} />
      <FilterModal open={openFilterModal} onClose={() => setOpenFilterModal(false)} onFilterChange={handleFilterChange} />
    </div>
  );
};

StudentsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default StudentsTable;
