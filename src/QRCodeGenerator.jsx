import React, { useState } from 'react';
import './QRCodeGenerator.css';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import WifiForm from './forms/WifiForm.jsx';
import SmsForm from './forms/SmsForm.jsx';
import TextForm from './forms/TextForm.jsx';
import UrlForm from './forms/UrlForm.jsx'; 
import EmailForm from './forms/EmailForm.jsx';
import VCardForm from './forms/VCardForm.jsx';
import PhoneForm from './forms/PhoneForm.jsx';
import YoutubeForm from './forms/YoutubeForm.jsx';
import BitcoinForm from './forms/BitcoinForm.jsx';
import TwitterForm from './forms/TwitterForm.jsx';
import FacebookForm from './forms/FacebookForm.jsx';
import MeCardForm from './forms/MeCardForm.jsx';
import './Form.css';
import { AiOutlineRedo } from 'react-icons/ai';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const QRCodeGenerator = () => {
  const [type, setType] = useState('text');
  const [data, setData] = useState('');
  const [selectedType, setSelectedType] = useState('text');
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [fgColor, setFgColor] = useState('#000000'); 
  const [bgColor, setBgColor] = useState('#ffffff'); 
  const [downloadFormat, setDownloadFormat] = useState('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const options = [
    { value: 'text', label: 'Text' },
    { value: 'url', label: 'URL' },
    { value: 'vcard', label: 'vCard' },
    { value: 'wifi', label: 'WiFi' },
    { value: 'sms', label: 'SMS' },
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'mecard', label: 'MeCard' }
  ];

  const visibleOptionsCount = 7;

  const handleTypeChange = (e) => {
    const newType = e.target.dataset.value || e.target.value;
    setType(newType);
    setSelectedType(newType);
    setData(''); // Reset data when changing type
    setQrCodeGenerated(false); // Reset QR code generation
  };

  const handleFormChange = (formData) => {
    let formattedData = '';
    switch (type) {
      case 'wifi':
        formattedData = `WIFI:T:${formData.encryption};S:${formData.ssid};P:${formData.password};;`;
        break;
      case 'sms':
        formattedData = `sms:${formData.number}?body=${encodeURIComponent(formData.message)}`;
        break;
      case 'email':
        formattedData = `mailto:${formData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
        break;
      case 'vcard':
        formattedData = `
          BEGIN:VCARD
          VERSION:3.0
          N:${formData.lastname};${formData.firstname}
          TEL:${formData.phoneNumber}
          EMAIL:${formData.email}
          ORG:${formData.organisation}
          END:VCARD
        `.replace(/\s+/g, ''); // Remove extra whitespace
        break;
      case 'phone':
        formattedData = `tel:${formData.number}`;
        break;
      case 'youtube':
        formattedData = formData.url;
        break;
      case 'bitcoin':
        formattedData = `bitcoin:${formData.address}?amount=${formData.amount}&currency=${formData.currency}`;
        break;
      case 'twitter':
        formattedData = formData.profileUrl;
        break;
      case 'facebook':
        formattedData = formData.profileUrl;
        break;
      case 'mecard':
        formattedData = `
          BEGIN:MECARD
          N:${formData.name}
          TEL:${formData.phone}
          EMAIL:${formData.email}
          END:MECARD
        `.replace(/\s+/g, '');
        break;
      case 'url':
        formattedData = formData.url;
        break;
      default:
        formattedData = formData.text;
        break;
    }
    setData(formattedData);
  };

  const handleGenerateQRCode = () => {
    setQrCodeGenerated(true);
  };

  const handleDownload = (format) => {
    html2canvas(document.getElementById('qrCode')).then((canvas) => {
      if (format === 'pdf') {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save('qr-code.pdf');
      } else {
        const link = document.createElement('a');
        link.download = `qr-code.${format}`;
        link.href = canvas.toDataURL(`image/${format}`);
        link.click();
      }
    });
  };

  const handleFormatChange = (e) => {
    const format = e.target.value;
    setDownloadFormat(format);
    handleDownload(format);
  };

  const handleFgColorChange = (e) => {
    setFgColor(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const toggleShowMoreOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  const renderForm = () => {
    switch (type) {
      case 'wifi':
        return <WifiForm onChange={handleFormChange} />;
      case 'sms':
        return <SmsForm onChange={handleFormChange} />;
      case 'email':
        return <EmailForm onChange={handleFormChange} />;
      case 'vcard':
        return <VCardForm onChange={handleFormChange} />;
      case 'phone':
        return <PhoneForm onChange={handleFormChange} />;
      case 'youtube':
        return <YoutubeForm onChange={handleFormChange} />;
      case 'bitcoin':
        return <BitcoinForm onChange={handleFormChange} />;
      case 'twitter':
        return <TwitterForm onChange={handleFormChange} />;
      case 'facebook':
        return <FacebookForm onChange={handleFormChange} />;
      case 'mecard':
        return <MeCardForm onChange={handleFormChange} />;
      case 'url': // Handle URL form
        return <UrlForm onChange={handleFormChange} />;
      default:
        return <TextForm onChange={handleFormChange} />;
    }
  };

  return (
    <div className='container'>
      <div className={`col1 ${!qrCodeGenerated ? '' : 'unresp-col'}`}>
        <div className='options'>
          {/* Unordered list for larger screens */}
          <ul className='options-list'>
            {options.slice(0, visibleOptionsCount).map((option) => (
              <li
                key={option.value}
                data-value={option.value}
                onClick={handleTypeChange}
                className={selectedType === option.value ? 'selected' : ''}
              >
                {option.label}
              </li>
            ))}
            {showMoreOptions && options.slice(visibleOptionsCount).map((option) => (
              <li
                key={option.value}
                data-value={option.value}
                onClick={handleTypeChange}
                className={selectedType === option.value ? 'selected' : ''}
              >
                {option.label}
              </li>
            ))}
            <button className='more-btn' onClick={toggleShowMoreOptions}>
              {showMoreOptions ? <FaAngleDoubleLeft className='more-icon' /> : <FaAngleDoubleRight className='more-icon' />}
              {showMoreOptions ? 'Less' : 'More'}
            </button>
          </ul>
        </div>
        {renderForm()}
        <button onClick={handleGenerateQRCode} className="button">Generate QR Code</button>
      </div>
      <div className={`col2 ${qrCodeGenerated ? '' : 'resp-col'}`}>
        <div id="qrCode" className={`qr-container ${qrCodeGenerated ? '' : 'greyed-out'}`}>
          <QRCode
            className="qr-code"
            value={qrCodeGenerated ? data : ''}
            size={256}
            fgColor={qrCodeGenerated ? fgColor : '#000000'} 
            bgColor={bgColor}
          />
        </div>
        {qrCodeGenerated && (
          <div className='color-selectors'>
            <label>
              Foreground Color:
              <input type="color" value={fgColor} onChange={handleFgColorChange} />
            </label>
            <label>
              Background Color:
              <input type="color" value={bgColor} onChange={handleBgColorChange} />
            </label>
          </div>
        )}
        {qrCodeGenerated && (
          <div className='action-btns'>
            <label htmlFor="download-options" className="btn-label">Download As:</label>
            <select id="download-options" onChange={handleFormatChange} className="button">
              <option value="">Select format</option>
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="pdf">PDF</option>
            </select>
            <button className='redo-btn' onClick={() => setQrCodeGenerated(!qrCodeGenerated)}>
              <AiOutlineRedo />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
