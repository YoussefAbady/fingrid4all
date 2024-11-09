import React, { version } from 'react';
import './ServicePopup.css';

const process_map = {
  'DH-100': {
    Full_Titile: 'Customer, Accounting Point and Energy Community Data Maintenance Processes',
    Processes: ['DH-110: Customer Information Maintenance',
                'DH-120: Accounting Point Data Maintenance', 
                'DH-130: Customer and Accounting Point Data Reque',
                'DH-140: Energy Community Data Maintenance'],
    Events: 18,
    version: '3.2',
    roadmap:{
      'Q1-2025': {
        Version: '3.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '3.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

 'DH-200': {
    Full_Titile: 'Metering Data Maintenance Processes',
    Processes: ['DH-210: Customer Information Maintenance',
                'DH-220: Accounting Point Data Maintenance', 
                'DH-230: Customer and Accounting Point Data Reque',
                'DH-240: Energy Community Data Maintenance'],
    Events: 40,
    version: '4.2',
    roadmap:{
      'Q2-2025': {
        Version: '4.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q4-2025': {
        version: '4.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

  'DH-300': {
    Full_Titile: 'Agreement Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

  'DH-400': {
    Full_Titile: 'Connection and Disconnection Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

  'DH-500': {
    Full_Titile: 'Imbalance Settlement Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

  'DH-600': {
    Full_Titile: 'Balance Deviation Correction Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

  'DH-700': {
    Full_Titile: 'Product and Invoicing Data Maintenance Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },

  'DH-800': {
    Full_Titile: 'Authorisation Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },
  
  'DH-900': {
    Full_Titile: 'Party Information Processes',
    Processes: ['DH-310: Customer Information Maintenance',
                'DH-320: Accounting Point Data Maintenance', 
                'DH-330: Customer and Accounting Point Data Reque',
                'DH-340: Energy Community Data Maintenance'],
    Events: 18,
    version: '1.2',
    roadmap:{
      'Q1-2025': {
        Version: '1.3',
        Title: 'Update in DH-130: Introduce new Event DH-133-1 for accounting point and customer information request - new supplier ',
        Notes: '',
      },
      'Q3-2025': {
        Version: '1.4',
        Title: 'Update in DH-120: Introduce new dataflow DH-122-4 for estimated annual consumption update to supplier',
        Notes: '',
      }
    } 
  },
};


const ServicePopup = ({ service, onClose }) => {
  if (!service) return null;

  const details = process_map[service.id];


  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>✖</button>
        
        {/* Header Section */}
        <div className="popup-header">

        <h2>{service.id}: {details.Full_Titile}</h2>

        <div class="popup-header-container">
          <div class="header-item">
              <h4>Version no.</h4>
              <p>{details.version}</p>
          </div>
          <div class="header-item">
              <h4>Proccess Number</h4>
              <p>{details.Events}</p>
          </div>

        </div>

        </div>
        
        {/* Supported Features Section */}
        <div className="popup-features">
          <h3>Supported Processes 

          <a href="https://palvelut.datahub.fi/api/documents/file/0-473974-2-633373" className="icon-link" target="_blank" rel="noopener noreferrer">
      <img src="/assets/open-in-new-tab-icon.jpg" alt="Open Documentation" />
    </a>


          </h3>
          {details && (
            <>
              <ul>
                {details.Processes.map((process, index) => (
                  <li key={index}>{process}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="popup-roadmap">
          <h3>Roadmap</h3>  
          <ul className="timeline">
          {Object.entries(details.roadmap).map(([quarter, item], index) => (
            <li className="timeline-item" key={index}>
              <h4>{quarter}</h4>
              <h5>Version no. {item.Version}</h5>
              <p>
                {item.Title}
                <a href={item.Notes} target="_blank" rel="noopener noreferrer" alt="Open Documentation"> See More</a>
              </p>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default ServicePopup;