exports.main = async (context = {}) => {
  const inputFields = context.inputFields || {};
  const contactId = String(inputFields.contactId || '').trim();
  const briefType = String(inputFields.briefType || 'sales').trim();

  if (!contactId) {
    return {
      outputFields: {
        contactName: '',
        brief: 'A contact ID is required.',
        recommendedNextStep: 'Ask the user for the contact record to summarize.',
        confidence: 'low'
      }
    };
  }

  return {
    outputFields: {
      contactName: 'Sample Contact',
      brief: `Sample ${briefType} brief for contact ${contactId}. Replace this with server-side HubSpot data lookup when ready.`,
      recommendedNextStep: 'Send a short personalized follow-up.',
      confidence: 'sample'
    }
  };
};

