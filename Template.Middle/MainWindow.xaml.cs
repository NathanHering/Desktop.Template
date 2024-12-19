using Microsoft.Web.WebView2.Core;
using System.Windows;

namespace Template.Middle
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            InitializeWebView();
        }

        private async void InitializeWebView()
        {
            await webView.EnsureCoreWebView2Async(null);
            webView.CoreWebView2.Navigate("http://localhost:5000/index.html");
        }
    }
}