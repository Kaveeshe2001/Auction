using Auction_Web_App.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.Net;
using System.Net.Mail;

namespace Auction_Web_App.Service
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;

        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var smtpServer = _configuration["EmailSettings:SmtpServer"];
            var portString = _configuration["EmailSettings:Port"];
            var senderEmail = _configuration["EmailSettings:SenderEmail"];
            var password = _configuration["EmailSettings:Password"];

            if (string.IsNullOrEmpty(smtpServer) || string.IsNullOrEmpty(portString) ||
                string.IsNullOrEmpty(senderEmail) || string.IsNullOrEmpty(password))
            {
                throw new InvalidOperationException("Email settings are not properly configured.");
            }

            if (!int.TryParse(portString, out int port))
            {
                throw new InvalidOperationException("Invalid port number in configuration.");
            }

            using (var client = new SmtpClient(smtpServer, port))
            {
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(senderEmail, password);

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(senderEmail),
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = true,
                };
                mailMessage.To.Add(email);

                try
                {
                    await client.SendMailAsync(mailMessage);
                }
                catch (Exception ex)
                {
                    // Log the exception or handle it appropriately
                    throw new ApplicationException("Failed to send email", ex);
                }
            }
        }
    }

    public class EmailSettings
    {
        public string SmtpServer { get; set; }
        public int SmtpPort { get; set; }
        public string SmtpUser { get; set; }
        public string SmtpPass { get; set; }
        public string FromEmail { get; set; }
    }
}
