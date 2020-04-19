'use strict';
    var svgs = [];
    svgs['like'] = '<path d="M861.707 429.607L775.345 832.58c-0.655 3.059-5.789 7.1-8.3 7.1l-437.09-0.182V402.773h3.277v-1.201A200.504 200.504 0 0 0 512 202.524V184.32a36.445 36.445 0 0 1 72.818 0h2.33c7.209 37.32 13.617 121.169-27.161 159.18a36.409 36.409 0 0 0 24.83 63.06c5.28 0 10.414-1.53 15.293-3.787h239.206c8.447 0 15.219 2.658 19.151 7.5 3.75 4.66 4.915 11.542 3.24 19.334zM148.13 402.773h109.008v436.689H147.91l0.219-436.689z m766.953-38.302c-17.731-21.954-45.366-34.515-75.767-34.515H651.592c26.36-76.46 6.116-165.006 4.951-169.884a35.207 35.207 0 0 0-5.607-12.124A109.008 109.008 0 0 0 548.41 75.13 109.045 109.045 0 0 0 439.8 178.313h-0.619v24.211c0 70.27-57.162 127.432-127.43 127.432H148.13c-40.269 0-73.037 32.768-73.037 73.072v436.397c0 40.305 32.586 73.073 72.636 73.073h619.315c36.81 0 71.726-28.4 79.517-64.626l86.362-403.01c6.262-29.31-0.218-58.582-17.84-80.39z" p-id="10665" data-spm-anchor-id="a313x.7781069.0.i21"></path>';
    svgs['view'] = '<path d="M502.054 183.68c69.605 0.133 132.349 14.482 192.58 40.424 68.932 29.689 129.792 71.797 185.902 121.183 47.445 41.758 90.322 87.848 129.929 137.026 13.577 16.859 12.714 30.815 2.157 46.452-29.091 43.085-62.349 82.697-98.383 120.040-48.923 50.701-103.14 94.712-164.84 129.088-52.59 29.3-108.311 49.788-168.13 58.164-74.098 10.375-146.114 1.624-216.238-24.098-74.147-27.196-139.002-69.687-198.604-120.729-57.139-48.933-107.566-104.215-153.463-163.708-12.511-16.217-12.712-25.623-0.805-42.445 53.434-75.496 117.087-140.989 191.974-195.392 49.495-35.958 102.841-64.598 161.175-83.529 45.676-14.823 92.546-22.319 136.749-22.473zM729.829 312.353c62.471 114.537 26.775 243.337-55.2 312.739-85.635 72.502-206.65 80.404-298.895 18.919-55.437-36.951-91.14-88.173-105.728-153.369-14.559-65.065-3.497-126.304 29.599-184.028-89.074 49.493-160.202 118.702-222.228 198.313 28.273 35.352 57.686 68.854 89.381 100.289 28.474 28.243 58.594 54.593 91.232 78.017 59.076 42.4 123.006 73.687 195.211 86.407 46.052 8.116 92.043 8.097 137.882-1.203 67.85-13.766 128.424-43.944 183.977-84.295 65.973-47.922 121.714-106.232 169.908-171.884 2.369-3.228 2.381-5.26-0.301-8.232-18.146-20.096-35.688-40.754-54.262-60.443-41.478-43.972-86.637-83.725-137.453-116.748-7.624-4.955-15.412-9.661-23.122-14.479zM338.953 446.287c1.141 3.841 1.933 9.901 4.648 14.923 4.954 9.165 17.306 12.925 29.093 10.007 11.171-2.767 17.454-11.352 19.1-23.42 1.913-14.034 3.599-28.346 7.818-41.773 16.275-51.814 52.514-80.178 105.998-86.948 15.556-1.969 26.188-13.654 25.942-29.385-0.226-14.399-9.358-23.32-23.712-22.702-5.562 0.239-11.118 1.18-16.623 2.113-32.155 5.451-61.785 16.983-87.005 38.054-42.629 35.615-59.669 83.495-65.258 139.132z" p-id="7604"></path>';
    svgs['comment'] = '<path d="M176 193c-17.673 0-32 14.327-32 32v481c0 17.673 14.327 32 32 32h27c51.915 0 94 42.085 94 94v45.5a1.94 1.94 0 0 0 3.293 1.388l117.045-114.176A94 94 0 0 1 482.976 738H848c17.673 0 32-14.327 32-32V225c0-17.673-14.327-32-32-32H176z m0-80h672c61.856 0 112 50.144 112 112v481c0 61.856-50.144 112-112 112H482.976a14 14 0 0 0-9.776 3.978L356.156 936.154c-32.394 31.6-84.271 30.956-115.87-1.437A81.94 81.94 0 0 1 217 877.5V832c0-7.732-6.268-14-14-14h-27c-61.856 0-112-50.144-112-112V225c0-61.856 50.144-112 112-112z m336 438c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m228 0c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m-456 0c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z" p-id="24020"></path>';
    svgs['time'] = '<path d="M528.384 76.223488c-236.78976 0-428.736512 191.945728-428.736512 428.736512S291.59424 933.695488 528.384 933.695488s428.736512-191.945728 428.736512-428.736512S765.17376 76.223488 528.384 76.223488zM528.384 838.42048c-184.152064 0-333.461504-149.331968-333.461504-333.461504 0-184.152064 149.30944-333.461504 333.461504-333.461504 184.128512 0 333.461504 149.30944 333.461504 333.461504C861.84448 689.088512 712.512512 838.42048 528.384 838.42048z" p-id="2512"></path><path d="M576.02048 314.409984c26.331136 0 47.637504 21.32992 47.637504 47.637504l0 190.548992c0 26.331136-21.307392 47.637504-47.637504 47.637504-26.30656 0-47.637504-21.307392-47.637504-47.637504L528.382976 362.047488C528.384 335.739904 549.71392 314.409984 576.02048 314.409984z" p-id="2513"></path><path d="M385.471488 504.96 576.02048 504.96c26.331136 0 47.637504 21.32992 47.637504 47.637504 0 26.331136-21.307392 47.637504-47.637504 47.637504L385.471488 600.235008c-26.307584 0-47.637504-21.307392-47.637504-47.637504C337.833984 526.28992 359.163904 504.96 385.471488 504.96z" p-id="2514"></path>';
    svgs['search'] = '<path d="M1010.896786 956.77807l-171.035567-183.288862c69.435335-84.241399 107.216326-190.947171 107.216326-300.205713 0-260.382506-212.390436-473.283495-473.79405-473.283495S0 212.90099 0 473.794049c0 261.403613 212.90099 473.794049 473.794049 473.79405 67.393119 0 134.275684-14.29551 196.052711-42.375977 9.700525-4.084431 16.84828-12.253294 20.422157-21.953819 3.573878-9.700525 3.063324-20.422157-1.021108-29.612128-4.084431-9.700525-12.253294-16.84828-21.953819-20.422157-9.700525-3.573878-20.422157-3.573878-29.612128 1.021108-51.565947 23.485481-107.72688 35.228221-163.887813 35.228221-218.006529 0-395.168744-177.162215-395.168743-395.168744S255.276966 79.13586 473.283495 79.13586s395.168744 177.162215 395.168744 395.168743c0 102.110787-39.312653 200.647695-110.279649 274.167462-7.147755 7.658309-10.721633 17.358834-11.232187 28.080466 0 10.721633 4.594985 20.422157 12.253295 28.080467 0.510554 0.510554 1.531662 1.021108 2.552769 1.531662 0.510554 0 0.510554 0.510554 1.021108 0.510553 0 0.510554 0.510554 0.510554 0.510554 1.021108 0.510554 1.531662 1.531662 2.55277 2.55277 3.573878l187.373293 200.647695c14.806064 15.316618 39.312653 16.337726 55.139825 1.531662 7.658309-7.147755 12.253294-16.84828 12.763848-27.059358 1.021108-11.74274-3.063324-21.443265-10.211079-29.612128z" p-id="8317"></path>';
    svgs['money'] = '<path d="M604.841 484.437l38.056-142.017c21.876 13.819 41.059 33.969 60.703 61.446l119.195-74.155c-32.256-54.079-75.957-100.453-141.938-128.954L708.46 97.749 586.286 65.014l-28.145 105.028c-111.458-7.127-210.96 10.821-246.084 141.909-22.921 85.543 73.369 161.43 149.398 218.921L420.031 685.47c-32.409-15.931-64.079-42.161-99.245-83.281L208.688 697.73c42.345 60.06 113.293 105.039 173.556 128.766l-27.058 100.98 122.168 32.734 28.679-107.031c121.271 5.431 222.916-13.346 249.169-111.324 35.23-131.478-72.978-201.343-150.361-257.418M445.09 340.791c5.919-22.092 38.628-28.492 74.725-27.72l-25.486 95.115c-33.307-24.787-54.748-46.834-49.239-67.395m99.047 370.187l26.853-100.207c32.851 26.149 53.821 49.644 48.013 71.324-5.807 21.665-38 29.04-74.866 28.883" p-id="2317" data-spm-anchor-id="a313x.7781069.0.i0"></path>';
    svgs['tags'] = '<path d="M541.2 632.8c-91.1 0-171.8 41.5-223.3 105.5l231.8 231.8c28.1 28.1 73.8 28.1 101.9 0l155.7-155.7c-37.9-105.6-142.6-181.6-266.1-181.6z" fill="#4EEAAB" p-id="7383"></path><path d="M970.2 549.8l-496-496a71.91 71.91 0 0 0-50.9-21.1c-2.4 0-4.9 0.1-7.3 0.4L126.9 62.6C92.9 66 66 92.9 62.6 126.9L33.1 416a71.99 71.99 0 0 0 20.7 58.2l495.9 495.9c14.1 14.1 32.5 21.1 50.9 21.1s36.9-7 50.9-21.1L970 651.6c28.3-28.1 28.3-73.7 0.2-101.8zM600.7 912.5l-491-491 28.8-283 283-28.8 491 491-311.8 311.8z" fill="#454563" p-id="7384" data-spm-anchor-id="a313x.7781069.0.i8"></path><path d="M310.8 210.4c-49.5 0-89.6 40.1-89.6 89.6s40.1 89.6 89.6 89.6 89.6-40.1 89.6-89.6-40.1-89.6-89.6-89.6z m0 102.4c-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8z" fill="#454563" p-id="7385"></path>';
    svgs['right'] = '<path d="M294.4 908.8 684.8 512 294.4 115.2c-25.6-25.6-25.6-70.4 0-96 25.6-25.6 70.4-25.6 96 0L832 460.8c12.8 12.8 19.2 32 19.2 51.2S844.8 544 832 563.2l-441.6 441.6c-25.6 25.6-70.4 25.6-96 0C262.4 979.2 262.4 934.4 294.4 908.8z" p-id="1915" data-spm-anchor-id="a313x.7781069.0.i2"></path>';
    svgs['left'] = '<path d="M704 908.8 307.2 512 704 115.2c25.6-25.6 25.6-70.4 0-96-25.6-25.6-70.4-25.6-96 0L166.4 460.8C147.2 480 140.8 492.8 140.8 512s6.4 32 19.2 51.2l441.6 441.6c25.6 25.6 70.4 25.6 96 0C729.6 979.2 729.6 934.4 704 908.8z" p-id="2034" data-spm-anchor-id="a313x.7781069.0.i4"></path>';
    svgs['reply'] = '<path d="M415.937331 320 415.937331 96 20.001331 438.176C-6.718669 461.28-6.622669 498.784 20.033331 521.824L415.937331 864 415.937331 640C639.937331 640 847.937331 688 1023.937331 928 943.937331 480 607.937331 320 415.937331 320" p-id="4051" data-spm-anchor-id="a313x.7781069.0.i0"></path>';
    svgs['circle'] = '<path d="M908.548 205.661L582.454 20.479c-21.959-12.5-46.417-18.694-70.876-18.694-24.458 0-48.917 6.194-70.875 18.693L114.591 205.661c-44.496 25.298-71.976 72.312-71.976 123.281v367.902c0 50.932 27.48 97.982 71.976 123.242l326.112 185.223C462.661 1017.77 487.12 1024 511.578 1024c24.459 0 48.917-6.23 70.876-18.691l326.094-185.223c44.514-25.26 71.975-72.311 71.975-123.242V328.942c-0.001-50.969-27.461-97.983-71.975-123.281zM548.257 945.83a74.699 74.699 0 0 1-36.679 9.664 74.6 74.6 0 0 1-36.679-9.664L235.427 809.826c15.597-8.58 31.623-14.551 45.26-15.709 16.53-1.418 39.645-7.162 64.123-13.246 9.179-2.313 18.414-4.588 27.145-6.604 51.547-11.902 68.749-22.723 77.199-29.85a34.271 34.271 0 0 0 12.202-26.865c-0.504-22.5-8.209-44.402-22.425-63.619-2.258-3.955-5.317-7.424-8.993-10.223-46.827-35.635-74.793-97.236-74.793-164.734 0-106.64 70.503-193.393 157.162-193.393 86.64 0 157.123 86.64 157.123 193.204 0 67.35-27.966 128.803-74.793 164.438-2.238 1.68-4.328 3.768-6.101 5.969-16.306 20.41-24.794 42.76-25.297 66.379a34.32 34.32 0 0 0 12.014 26.717c7.594 6.455 23.173 15.484 76.66 27.908 32.237 7.539 69.475 14.031 90.52 15.822 17.816 1.566 37.76 8.357 55.503 17.982L548.257 945.83z m363.35-248.986c0 26.268-14.273 50.744-37.257 63.805l-9.981 5.672c-0.337-0.299-0.466-0.709-0.803-0.971-32.312-26.342-75.37-44.104-115.184-47.537-17.574-1.529-52.275-7.686-80.745-14.326-11.978-2.762-21.249-5.225-28.282-7.24 0.355-0.559 0.728-1.117 1.138-1.715 61.361-48.844 97.87-129.027 97.87-215.743 0-144.324-101.415-261.709-226.057-261.709-124.68 0-226.077 117.46-226.077 261.898 0 86.49 36.193 166.525 97.087 215.406a52.32 52.32 0 0 1 3.283 5c-7.239 2.313-17.071 5.111-30.242 8.133-9.123 2.127-18.73 4.516-28.264 6.902-19.832 4.926-42.293 10.484-53.32 11.455-34.477 2.947-73.281 20.297-105.8 46.193l-20.186-11.418c-22.965-13.061-37.256-37.537-37.256-63.805V328.942c0-26.306 14.291-50.745 37.256-63.804l326.112-185.22a74.608 74.608 0 0 1 36.679-9.664 74.701 74.701 0 0 1 36.679 9.664l326.094 185.22c22.983 13.06 37.257 37.499 37.257 63.804v367.902z" p-id="6675"></path>';
    svgs['close'] = '<path d="M591.530667 511.744l416.341333-416.768a54.613333 54.613333 0 0 0 0-76.8l-2.304-2.304a54.442667 54.442667 0 0 0-76.629333 0l-416.426667 417.365333L96.256 15.957333a54.442667 54.442667 0 0 0-76.629333 0L17.237333 18.090667a53.589333 53.589333 0 0 0 0 76.8l416.426667 416.768-416.426667 416.853333a54.613333 54.613333 0 0 0 0 76.8l2.304 2.218667a54.442667 54.442667 0 0 0 76.629334 0l416.426666-416.853334 416.341334 416.853334a54.442667 54.442667 0 0 0 76.629333 0l2.304-2.304a54.613333 54.613333 0 0 0 0-76.8l-416.426667-416.768z" p-id="1965" data-spm-anchor-id="a313x.7781069.0.i0"></path>';
    svgs['post'] = '<path d="M260.737 62c-89.263 0-157.827 78.218-157.827 168.382v573.463c0 90.246 67.909 158.154 158.073 158.154h491.809c90 0 168.3-68.237 168.3-158.727v-490.746l-250.527-250.527h-409.827zM260.982 880.182c-45 0-76.254-31.337-76.254-76.337v-573.463c0-44.754 31.663-86.563 76.009-86.563h333.082v168.054c0 46.554 31.827 77.4 77.4 77.4h168.054v414c0 45.327-41.646 76.909-86.482 76.909h-491.809zM716.546 716.546c22.593 0 40.909-18.316 40.909-40.909 0-22.593-18.316-40.909-40.909-40.909h-409.091c-22.593 0-40.909 18.316-40.909 40.909 0 22.593 18.316 40.909 40.909 40.909h409.091zM716.546 552.909c22.593 0 40.909-18.316 40.909-40.909s-18.316-40.909-40.909-40.909h-409.091c-22.593 0-40.909 18.316-40.909 40.909 0 22.593 18.316 40.909 40.909 40.909h409.091zM471.091 389.273c22.593 0 40.909-18.316 40.909-40.909s-18.316-40.909-40.909-40.909h-163.637c-22.593 0-40.909 18.316-40.909 40.909s18.316 40.909 40.909 40.909h163.637z"></path>';
    svgs['huo'] = '<path d="M338.488889 938.666667c-59.733333-119.466667-28.444444-187.733333 19.911111-250.311111 51.2-71.111111 62.577778-139.377778 62.577778-139.377778s42.666667 48.355556 25.6 125.155555c71.111111-73.955556 82.488889-193.422222 73.955555-238.933333 159.288889 105.244444 230.4 332.8 136.533334 500.622222 492.088889-261.688889 122.311111-651.377778 56.888889-694.044444 22.755556 45.511111 25.6 119.466667-19.911112 153.6-73.955556-261.688889-256-312.888889-256-312.888889 22.755556 133.688889-76.8 278.755556-173.511111 389.688889-2.844444-54.044444-5.688889-88.177778-36.977777-142.222222-5.688889 96.711111-85.333333 176.355556-108.088889 273.066666-25.6 136.533333 25.6 230.4 219.022222 335.644445"></path>';
    svgs['share'] = '<path d="M793.472 102.208c-70.592 0-128 57.408-128 128 0 7.744 0.96 15.232 2.304 22.656L273.6 422.976C250.368 399.04 217.92 384 181.952 384c-70.592 0-128 57.408-128 128 0 70.592 57.408 128 128 128 22.912 0 44.096-6.592 62.72-17.152l289.088 180.992c-4.672 13.312-7.744 27.392-7.744 42.24 0 70.592 57.408 128 128 128s128-57.408 128-128-57.408-128-128-128c-32.512 0-61.888 12.544-84.48 32.64L291.712 576.832C302.976 557.696 309.952 535.744 309.952 512c0-11.456-1.984-22.336-4.8-32.896l389.76-168.32c23.488 28.672 58.752 47.36 98.624 47.36 70.592 0 128-57.408 128-128S864.064 102.208 793.472 102.208zM117.952 512c0-35.264 28.736-64 64-64s64 28.736 64 64-28.736 64-64 64S117.952 547.264 117.952 512zM654.016 782.144c35.328 0 64 28.672 64 64s-28.672 64-64 64-64-28.672-64-64S618.688 782.144 654.016 782.144zM793.472 294.208c-35.328 0-64-28.736-64-64s28.672-64 64-64 64 28.736 64 64S828.8 294.208 793.472 294.208z"></path>';
    svgs['favorite'] = '<path d="M752 939.2c-9.6 0-20.8-3.2-30.4-8l-208-104-209.6 104c-20.8 11.2-48 9.6-67.2-4.8-19.2-14.4-30.4-40-25.6-64l43.2-224L89.6 484.8C72 467.2 65.6 440 72 417.6c8-24 27.2-41.6 52.8-44.8l228.8-41.6 102.4-208c11.2-22.4 33.6-36.8 57.6-36.8s48 14.4 57.6 36.8l102.4 208 228.8 40c24 3.2 44.8 20.8 51.2 44.8 8 24 1.6 49.6-16 67.2L772.8 638.4l41.6 224c4.8 25.6-6.4 49.6-25.6 64-9.6 8-22.4 12.8-36.8 12.8z"></path>';
    svgs['menu'] = '<path d="M230.60033 921.5c-28.3 0.3-51.4-22.4-51.7-50.6-0.3-28.3 22.4-51.4 50.6-51.7H972.80033c28.3 0.3 50.9 23.5 50.6 51.7-0.3 27.8-22.8 50.3-50.6 50.6H230.60033zM51.40033 563.2C23.10033 563.2 0.20033 540.3 0.20033 512c0-28.3 22.9-51.2 51.2-51.2h921.4c28.3 0 51.2 22.9 51.2 51.2 0 28.3-22.9 51.2-51.2 51.2H51.40033z m0-358.3c-28.3 0.1-51.3-22.7-51.4-51-0.1-28.3 22.7-51.3 51-51.4h921.9c28.3 0.1 51.1 23.1 51 51.4-0.1 28.1-22.9 50.8-51 51H51.40033z"></path>';
    svgs['d-qq'] = '<path d="M889.6 782.933c-12.8 2.134-42.667-25.6-61.867-76.8-14.933 57.6-42.666 104.534-81.066 140.8 46.933 12.8 76.8 34.134 76.8 61.867 0 40.533-66.134 72.533-147.2 72.533-61.867 0-113.067-17.066-136.534-44.8H512c-10.667 0-21.333 0-32-2.133-21.333 27.733-74.667 44.8-136.533 44.8-81.067 0-147.2-32-147.2-72.533 0-27.734 34.133-51.2 81.066-64C241.067 806.4 211.2 759.467 196.267 704c-21.334 51.2-49.067 78.933-61.867 78.933-17.067-2.133-34.133-53.333-25.6-134.4 6.4-51.2 34.133-119.466 64-138.666v-19.2c4.267-49.067 12.8-93.867 34.133-96-2.133-17.067-4.266-36.267-4.266-53.334C204.8 177.067 347.733 42.667 512 42.667s307.2 134.4 307.2 298.666c0 19.2-2.133 36.267-4.267 53.334 17.067 0 32 44.8 36.267 96v19.2c29.867 25.6 57.6 87.466 61.867 136.533 12.8 83.2-4.267 134.4-23.467 136.533z"></path>';
    svgs['d-weibo'] = '<path d="M996.243 460.502c0 0.03 0 0.091 0 0.152-6.479 19.983-27.916 30.943-47.838 24.465-19.983-6.48-30.944-27.917-24.464-47.959l-0.062-0.03c19.862-61.524 7.267-131.707-38.996-183.179-46.325-51.472-114.632-71.152-177.729-57.709-20.529 4.391-40.755-8.75-45.114-29.308-4.359-20.558 8.721-40.814 29.248-45.205l0 0c88.713-18.923 184.874 8.69 250.031 81.144C1006.477 275.265 1024.037 373.939 996.243 460.502zM733.072 318.107l0-0.03c-17.621 3.845-35.001-7.479-38.756-25.16-3.814-17.712 7.509-35.182 25.131-38.937 43.236-9.235 90.105 4.178 121.775 39.451 31.791 35.304 40.269 83.354 26.705 125.531-5.571 17.258-23.98 26.644-41.177 21.133-17.198-5.571-26.585-24.101-21.014-41.298l-0.061 0c6.661-20.648 2.482-44.145-13.02-61.403C777.156 320.166 754.205 313.657 733.072 318.107zM524.853 378.239c100.976-42.419 189.143-44.932 221.359 1.241 17.138 24.585 15.501 59.071-0.303 99.038-7.327 18.408 2.24 21.285 16.229 25.493C818.999 521.693 882.4 564.506 882.4 639.896c0 124.865-179.545 282.065-449.348 282.065-205.825 0-416.224-100.036-416.224-264.564 0-86.049 54.348-185.51 147.936-279.4 124.955-125.288 270.681-182.362 325.483-127.348 24.191 24.192 26.522 66.186 10.991 116.266C493.123 392.136 524.853 378.178 524.853 378.239zM395.024 471.373c-164.225 16.289-288.787 117.173-278.099 225.263 10.658 108.151 152.447 182.634 316.672 166.346 164.256-16.29 288.756-117.113 278.099-225.326C701.037 529.564 559.279 455.083 395.024 471.373zM327.384 816.535C248.42 790.98 214.994 712.804 249.57 642.318c33.941-69.033 122.291-108.091 200.437-87.684 80.902 20.951 122.17 97.493 89.108 171.794C505.597 802.486 409.194 842.998 327.384 816.535zM371.982 668.479c-25.433-10.658-58.315 0.303-73.997 25.008-15.896 24.768-8.418 54.319 16.834 65.824 25.614 11.747 59.616 0.605 75.512-24.828C405.923 708.808 397.718 679.5 371.982 668.479zM434.687 642.441c-9.779-3.877-21.981 0.785-27.703 10.414-5.542 9.689-2.482 20.71 7.295 24.768 9.962 4.117 22.648-0.666 28.4-10.477C448.161 657.216 444.588 646.074 434.687 642.441z" p-id="3731" data-spm-anchor-id="a313x.7781069.0.i4"></path>';
    svgs['d-wechat'] = '<path d="M670.564352 367.904768c10.274816 0 20.453376 0.751616 30.539776 1.878016-27.439104-127.772672-164.050944-222.703616-319.975424-222.703616-174.32576 0-317.126656 118.816768-317.126656 269.703168 0 87.095296 47.511552 158.611456 126.900224 214.081536L159.1808 726.26176l110.860288-55.59296c39.66976 7.856128 71.503872 15.9232 111.087616 15.9232 9.955328 0 19.820544-0.49152 29.607936-1.255424-6.201344-21.202944-9.787392-43.411456-9.787392-66.445312-0.002048-138.555392 118.976512-250.986496 269.615104-250.986496z m-170.512384-85.981184c23.877632 0 39.694336 15.712256 39.694336 39.571456 0 23.769088-15.816704 39.696384-39.694336 39.696384-23.775232 0-47.622144-15.925248-47.622144-39.696384 0-23.86944 23.851008-39.571456 47.622144-39.571456z m-221.949952 79.265792c-23.764992 0-47.753216-15.925248-47.753216-39.70048 0-23.863296 23.988224-39.56736 47.753216-39.56736 23.771136 0 39.58784 15.702016 39.58784 39.56736 0 23.775232-15.816704 39.70048-39.58784 39.70048z" p-id="2048"></path><path d="M960 615.069696c0-126.785536-126.871552-230.127616-269.365248-230.127616-150.888448 0-269.727744 103.340032-269.727744 230.127616 0 127.008768 118.837248 230.135808 269.727744 230.135808 31.578112 0 63.4368-7.964672 95.15008-15.919104l86.984704 47.634432-23.846912-79.251456c63.65184-47.755264 111.077376-111.079424 111.077376-182.59968z m-356.818944-39.677952c-15.792128 0-31.721472-15.70816-31.721472-31.735808 0-15.798272 15.929344-31.709184 31.721472-31.709184 23.988224 0 39.696384 15.910912 39.696384 31.709184 0 16.027648-15.70816 31.735808-39.696384 31.735808z m174.434304 0c-15.67744 0-31.496192-15.70816-31.496192-31.735808 0-15.798272 15.818752-31.709184 31.496192-31.709184 23.771136 0 39.696384 15.910912 39.696384 31.709184 0 16.027648-15.925248 31.735808-39.696384 31.735808z"></path>';
    svgs['d-email'] = '<path d="M512.012 630.535L927.56 284.31c-2.251-0.41-4.274-1.348-6.61-1.348H103.074c-2.288 0-4.323 0.927-6.574 1.348l415.512 346.226z m446.122-310.391c0-3.9-1.072-7.513-2.252-11.066L661.313 554.602l295.014 295.075c0.759-2.974 1.807-5.84 1.807-9.055V320.144z m-889.98-11.102c-1.144 3.577-2.288 7.14-2.288 11.102V840.61c0 3.25 1.12 6.105 1.855 9.079L362.83 554.59 68.154 309.042z" p-id="2793"></path><path d="M632.583 578.493l-108.698 90.539c-3.408 2.902-7.622 4.299-11.873 4.299-4.214 0-8.453-1.397-11.897-4.3l-108.601-90.49L94.079 875.963c2.926 0.77 5.828 1.842 8.995 1.842h817.888c3.227 0 6.129-1.06 9.115-1.842l-297.494-297.47z"></path>';
    svgs['user'] = '<path d="M603.136 505.856c-7.168 2.048-13.312 5.12-19.456 7.168-20.48 8.192-38.912 14.336-70.656 14.336-31.744 0-49.152-7.168-70.656-14.336-6.144-2.048-13.312-5.12-20.48-7.168-21.504-7.168-45.056 4.096-52.224 25.6-6.144 22.528 5.12 45.056 26.624 52.224 6.144 2.048 11.264 4.096 16.384 6.144 23.552 9.216 53.248 20.48 99.328 20.48 46.08 0 75.776-11.264 99.328-20.48 5.12-2.048 11.264-4.096 16.384-6.144 21.504-7.168 32.768-30.72 25.6-52.224-6.144-20.48-28.672-32.768-50.176-25.6z"></path><path d="M921.6 418.816c0-226.304-183.296-409.6-409.6-409.6s-409.6 183.296-409.6 409.6c0 174.08 109.568 322.56 263.168 381.952-48.128 40.96-78.848 102.4-78.848 171.008 0 22.528 18.432 40.96 40.96 40.96s40.96-18.432 40.96-40.96c0-78.848 64.512-143.36 143.36-143.36s143.36 64.512 143.36 143.36c0 22.528 18.432 40.96 40.96 40.96s40.96-18.432 40.96-40.96c0-68.608-30.72-129.024-78.848-171.008 153.6-59.392 263.168-207.872 263.168-381.952z m-409.6 327.68c-180.224 0-327.68-147.456-327.68-327.68s147.456-327.68 327.68-327.68 327.68 147.456 327.68 327.68-147.456 327.68-327.68 327.68z"></path>';
    svgs['theme'] = '<path d="M512 33.408c288.832 0 480 227.008 480 428.16 0 126.528-84.864 225.6-186.048 264.576-23.36 8.96-52.224 14.464-86.016 17.28-31.68 2.56-63.104 2.752-99.392 1.472l-20.672-0.64c-6.4 0-21.248 16.256-21.248 42.88 0 10.496 0.384 11.456 6.08 17.472l3.392 3.584c18.176 19.648 26.496 41.28 26.496 79.68 0 45.184-23.232 76.16-59.328 91.712-19.52 8.384-38.4 11.072-52.736 10.88-291.776 0-470.528-237.12-470.528-480C32 269.568 215.936 33.472 512 33.472z m87.872 646.784c3.2 0 29.76 1.024 23.04 0.768 33.92 1.152 63.104 1.024 91.712-1.28 28.224-2.432 51.584-6.784 68.288-13.248 78.528-30.272 145.088-107.904 145.088-204.8 0-168.064-165.184-364.224-416-364.224-256.704 0-416 204.416-416 413.12 0 210.752 154.688 416 406.848 416 6.464 0 17.216-1.472 27.008-5.76 13.952-5.952 20.736-14.976 20.736-32.896 0-22.4-2.304-28.48-9.472-36.224l-3.008-3.2c-16.192-17.152-23.488-33.28-23.488-61.376 0-60.672 42.112-106.88 85.248-106.88zM238.912 512a77.76 77.76 0 1 1-0.064-155.52 77.76 77.76 0 0 1 0 155.52z m146.688-192.512a77.76 77.76 0 1 1-0.064-155.52 77.76 77.76 0 0 1 0.064 155.52z m249.472 0a77.824 77.824 0 1 1 0.064-155.648 77.824 77.824 0 0 1 0 155.648zM783.232 512a77.824 77.824 0 1 1 0-155.648 77.824 77.824 0 0 1 0 155.648z"></path>';
    svgs['signout'] = '<path d="M630.093 487.772L450.318 314.694c-14.382-13.851-35.955-13.851-50.336 0-14.382 13.842-14.382 34.614 0 48.465l118.647 114.228H173.461c-21.573 0-35.955 13.842-35.955 34.614s14.382 34.614 35.955 34.614h345.168L399.99 660.843c-14.382 13.851-14.382 34.623 0 48.465 7.192 6.93 14.382 10.386 25.164 10.386 10.792 0 17.982-3.465 25.173-10.386l179.775-176.535s0-3.465 3.6-3.465c10.782-10.386 10.782-31.149-3.6-41.535z"></path><path d="M170.99 269.693c21.573 0 35.955-13.851 35.955-34.614v-69.237c0-20.763 14.382-34.614 35.955-34.614h611.235c21.573 0 35.955 13.851 35.955 34.614v692.317c0 20.763-14.382 34.614-35.955 34.614H242.9c-21.573 0-35.955-13.851-35.955-34.614v-69.237c0-20.764-14.382-34.614-35.955-34.614s-35.955 13.851-35.955 34.614v69.237c0 58.842 46.736 103.842 107.865 103.842h611.235c61.119 0 107.865-45 107.865-103.842V165.842C962 107 915.253 62 854.135 62H242.9c-61.128 0-107.865 45-107.865 103.842v69.237c0 20.764 14.382 34.614 35.955 34.614z"></path>';
    svgs['set'] = '<path d="M973.4144 422.4c-6.9632-36.352-26.112-58.88-61.44-71.5776-60.928-21.8112-81.92-60.1088-70.4512-125.2352 6.656-37.5808-2.1504-68.1984-31.3344-93.9008-39.5264-35.0208-82.944-62.976-131.8912-83.0464-39.1168-16.0768-72.3968-11.776-104.0384 17.7152-41.3696 38.6048-83.8656 43.1104-124.1088 6.5536-47.0016-42.5984-92.4672-41.5744-142.5408-10.9568-28.4672 17.408-56.7296 35.1232-84.8896 52.9408-44.032 27.7504-60.5184 65.4336-52.4288 118.4768 9.6256 63.2832-8.192 90.624-66.56 115.9168-32.8704 14.2336-57.0368 36.2496-63.3856 71.7824-10.1376 55.7056-12.6976 111.8208-3.072 168.7552 7.5776 44.4416 26.5216 73.8304 71.68 88.064 51.2 16.1792 75.0592 63.7952 64.6144 117.0432-1.9456 9.9328-3.3792 19.968-3.072 18.2272-2.1504 36.864 8.4992 57.1392 25.8048 73.8304 45.568 44.032 98.5088 76.0832 158.6176 96.5632 29.184 9.9328 54.4768 1.9456 77.7216-15.1552 73.728-54.4768 82.3296-54.5792 158.4128 2.56 25.1904 18.944 51.4048 24.9856 81.408 11.8784 52.224-22.8352 100.7616-51.712 144.1792-88.6784 26.4192-22.528 36.7616-50.4832 30.4128-85.504-13.2096-72.192 2.6624-102.7072 67.4816-131.1744 34.7136-15.2576 56.2176-40.0384 62.2592-77.6192 9.5232-59.2896 7.9872-118.3744-3.3792-177.4592zM850.7392 620.7488c-69.8368 33.6896-95.1296 100.352-85.1968 175.7184 3.7888 28.672-4.3008 43.52-25.8048 56.7296-13.6192 8.3968-27.2384 16.6912-40.2432 26.0096-33.28 23.8592-61.1328 30.1056-99.1232-0.512-56.7296-45.7728-137.5232-40.8576-193.024 7.0656-23.7568 20.48-42.3936 19.7632-65.6384 6.5536-17.6128-10.0352-35.1232-20.3776-52.3264-31.1296-28.7744-17.8176-43.7248-36.864-35.7376-77.4144 13.6192-69.12-37.6832-149.8112-106.9056-176.9472-25.1904-9.8304-33.5872-24.7808-34.816-47.616-1.3312-24.6784-1.7408-49.3568-1.1264-74.0352 0.7168-33.4848 10.4448-56.5248 46.6944-73.3184 68.608-31.5392 100.4544-92.672 91.8528-167.6288-4.608-40.3456 9.4208-62.7712 41.6768-80.2816 14.0288-7.5776 27.7504-15.872 40.96-24.7808 28.0576-18.944 49.7664-20.2752 79.6672 4.7104 58.88 49.152 143.36 46.1824 200.192-4.5056 22.528-20.0704 39.0144-18.0224 60.5184-5.632 13.824 7.9872 28.16 15.0528 41.6768 23.552 32.8704 20.8896 53.3504 42.1888 46.7968 90.3168-9.0112 65.8432 20.5824 129.7408 81.1008 156.4672 59.0848 26.112 65.024 65.4336 61.3376 119.6032 5.9392 42.8032-4.5056 73.8304-52.5312 97.0752z"></path><path d="M507.1872 321.024c-100.2496-1.4336-187.5968 87.4496-187.392 190.7712 0.2048 103.6288 87.6544 192.3072 187.6992 190.3616 98.9184-1.8432 184.1152-90.112 184.0128-190.6688 0-99.9424-86.2208-189.0304-184.32-190.464z m-3.2768 299.008c-58.6752-1.2288-107.2128-52.3264-105.2672-110.8992 2.048-59.2896 51.3024-105.472 111.104-104.0384 56.6272 1.4336 104.0384 50.688 103.3216 107.4176-0.7168 58.368-52.0192 108.7488-109.1584 107.52z"></path>';
    svgs['signup'] = '<path d="M752.78 614.775c22.772 0 41.198-18.467 41.198-41.196 0-13.12-6.123-24.788-15.663-32.33l0.213-0.26c-31.703-24.542-66.947-44.657-105.005-59.222 48.44-41.559 79.256-103.114 79.256-171.951 0-125.122-101.463-226.586-226.586-226.586-125.123 0-226.587 101.464-226.587 226.586 0 68.837 30.818 130.392 79.257 171.951-154.57 59.302-264.565 208.764-264.646 384.298v0.08c0.08 22.69 18.507 41.118 41.199 41.118 22.77 0 41.117-18.428 41.197-41.118 0-181.728 147.895-329.582 329.581-329.582 74.498 0 143.081 25.129 198.295 66.946 7.38 6.976 17.328 11.266 28.29 11.266zM526.192 454.008c-79.498 0-144.19-64.693-144.19-144.192 0-79.499 64.694-144.192 144.19-144.192 79.499 0 144.192 64.693 144.192 144.192s-64.693 144.192-144.192 144.192z m383.733 298.843H848.13v-61.798c0.001-17.057-13.84-30.898-30.897-30.898-17.1 0-30.898 13.84-30.898 30.898v61.798h-61.797c-17.097 0-30.897 13.84-30.897 30.898 0 17.057 13.8 30.898 30.897 30.898h61.797v61.797c0 17.059 13.799 30.896 30.898 30.896 17.058 0 30.897-13.837 30.897-30.896v-61.797h61.797c17.058 0 30.898-13.84 30.898-30.898s-13.839-30.898-30.898-30.898z"></path>';
    svgs['user_rp'] = '<path d="M523.56129 558.245161c-45.419355 0-82.580645 37.16129-82.580645 82.580645 0 33.032258 18.993548 61.109677 47.070968 74.322581v90.83871c0 19.819355 15.690323 35.509677 35.509677 35.509677s35.509677-15.690323 35.509678-35.509677v-90.83871c28.077419-13.212903 47.070968-41.290323 47.070967-74.322581-0.825806-45.419355-37.16129-82.580645-82.580645-82.580645z m341.058065-164.335484H157.729032c-38.812903 0-71.019355 31.380645-71.019355 71.019355v471.535484c0 38.812903 31.380645 71.019355 71.019355 71.019355h706.890323c38.812903 0 71.019355-31.380645 71.019355-71.019355V464.103226c0-38.812903-32.206452-70.193548-71.019355-70.193549z m0 494.658065c0 38.812903-8.258065 47.070968-47.070968 47.070968H204.8c-38.812903 0-47.070968-8.258065-47.070968-47.070968V511.174194c0-38.812903 8.258065-47.070968 47.070968-47.070968H817.548387c38.812903 0 47.070968 8.258065 47.070968 47.070968v377.393548zM177.548387 358.4c19.819355 0 35.509677-15.690323 36.335484-35.509677C246.090323 187.458065 366.658065 87.535484 512 87.535484c113.135484 0 211.406452 61.935484 264.258065 152.774193 5.780645 12.387097 18.167742 21.470968 32.206451 21.470968 19.819355 0 35.509677-15.690323 35.509678-35.509677 0-7.432258-2.477419-14.864516-6.606452-20.645162C772.129032 92.490323 650.735484 16.516129 511.174194 16.516129 328.670968 16.516129 177.548387 142.03871 142.03871 313.806452c0 0.825806 0 1.651613-0.825807 2.477419 0 0.825806 0 1.651613-0.825806 2.477419v3.303226c0.825806 19.819355 17.341935 36.335484 37.16129 36.335484z m0 0"></path>';
    svgs['close'] = '<path d="M573.44 512.128l237.888 237.696a43.328 43.328 0 0 1 0 59.712 43.392 43.392 0 0 1-59.712 0L513.728 571.84 265.856 819.712a44.672 44.672 0 0 1-61.568 0 44.672 44.672 0 0 1 0-61.568L452.16 510.272 214.208 272.448a43.328 43.328 0 0 1 0-59.648 43.392 43.392 0 0 1 59.712 0l237.952 237.76 246.272-246.272a44.672 44.672 0 0 1 61.568 0 44.672 44.672 0 0 1 0 61.568L573.44 512.128z" p-id="35424" data-spm-anchor-id="a313x.7781069.0.i48"></path>';
    svgs['pan_baidu'] = '<path d="M1008.45542717 705.56838367c0 133.69628798-108.3823688 242.0786568-242.0786568 242.0786568-58.29538853 0-111.75541773-20.63131534-153.53741716-54.95832779-15.23567982-11.3243619-25.10886432-29.45747728-25.10886432-49.89927221 0-34.31795067 27.81988637-62.13783703 62.13783703-62.13783705 15.29626421 0 29.2925531 5.53725801 40.11877667 14.70336569l0.08699297-0.09709037c20.55959792 17.50992466 47.18074185 28.11348765 76.30267481 28.11348765 65.06064555 0 117.80298272-52.74233717 117.80298272-117.80298272s-52.74233717-117.80298272-117.80298272-117.80298271c-31.58103786 0-60.23383015 12.45061019-81.38244299 32.68476118l-3.72878802 3.72878804c-1.17906546 1.23265934-2.33767721 2.48499566-3.46263098 3.76762419l-144.2234732 144.2232143c-0.02278387-0.07974355-0.04142523-0.16078165-0.0642091-0.24078412l-100.65837677 100.65863566c-44.08912555 46.24349614-106.29609093 75.05914134-175.23361968 75.05914134-133.69628798 0-242.0786568-108.3823688-242.0786568-242.07865678 0-133.41123067 107.92151318-241.61236411 241.22452045-242.07321974a259.95985503 259.95985503 0 0 1-2.2527555-34.18124742c0-142.27571092 115.33740512-257.61311605 257.61311605-257.61311606s257.61311605 115.33740512 257.61311604 257.61311606c0 11.58948333-0.77025027 22.99876693-2.2530144 34.18280086 133.18390974 0.60040685 240.96587169 108.74716969 240.9658717 242.0719252z m-868.63518026 0c0 65.06064555 52.74207826 117.80298272 117.80298272 117.80298272 33.27584736 0 63.32466973-13.80159033 84.74746576-35.98661051l-0.03158673-0.03158673 1.23602515-1.23576623c19.7507704-21.06679803 31.85107854-49.39284884 31.85107854-80.54876034 0-65.06064555-52.74207826-117.80298272-117.80298272-117.80298272-65.06090445-0.0002589-117.80298272 52.74207826-117.80298272 117.80272381z m372.30920692-409.59190913c-73.64032739 0-133.33744197 59.69737349-133.33744198 133.33744198 0 73.64032739 59.69711458 133.33744197 133.33744198 133.33744196s133.33744197-59.69711458 133.33744198-133.33744196c0-73.64006849-59.69711458-133.33744197-133.33744198-133.33744198z"></path>';
    svgs['weiyun'] = '<path d="M987.909224 900.576653c10.971429-8.986122 21.545796-18.348408 31.681307-28.212245 96.193306-93.748245 149.169633-222.187102 149.169632-361.680979 0-14.524082-0.543347-28.88098-1.609143-43.070694a243.168653 243.168653 0 0 1 91.324082 189.962449c0 143.318204-103.006041 234.809469-270.607673 242.980571l0.041795 0.020898z m-532.500897 0.647837c-110.592 0-199.68-26.791184-257.609143-77.406041-50.823837-44.408163-77.656816-107.52-77.656817-182.522776 0-79.307755 28.065959-148.145633 79.119674-193.870367a211.800816 211.800816 0 0 1 142.774857-54.104816c8.463673 0 16.990041 0.459755 25.558204 1.421061 63.38351 7.000816 112.64 37.114776 135.188898 82.546939 16.509388 33.353143 15.610776 69.820082-2.507755 99.996734-14.085224 23.44751-33.248653 37.908898-56.967837 42.987103-27.397224 5.851429-60.666776-1.191184-84.78302-18.014041l-60.144327 104.155428c50.364082 31.764898 113.099755 43.509551 170.067592 31.305143 56.717061-12.099918 103.340408-46.205388 134.791837-98.617469 39.079184-64.992653 41.712327-145.387102 7.188898-215.123592-36.884898-74.396735-108.105143-125.680327-198.133551-143.777959a257.609143 257.609143 0 0 1 61.565387-84.365061c53.707755-48.817633 129.107592-75.692408 212.365062-75.692409 99.22351 0 190.840163 39.998694 257.94351 112.681796 67.37502 72.933878 104.489796 171.593143 104.489796 277.859266 0 106.788571-40.124082 204.716408-112.911674 275.602285-77.176163 75.190857-183.484082 114.938776-307.388081 114.938776h-172.95151z m677.302857-587.734204C1061.219265 127.749224 890.420245 0 686.226286 0c-113.204245 0-217.338776 37.971592-293.198368 106.976653a381.471347 381.471347 0 0 0-107.770775 170.819918A329.310041 329.310041 0 0 0 119.118367 357.982041C42.360163 426.736327 0 527.36 0 641.295673 0 751.992163 41.085388 846.367347 118.742204 914.285714c80.164571 70.029061 196.545306 107.081143 336.666123 107.081143h507.611428c248.602122 0 415.618612-146.181224 415.618612-363.791673 0-159.346939-103.026939-295.01649-245.885387-344.084898h-0.041796z"></path>';
    svgs['lanzou'] = '<path d="M829.248 420.576C815.264 274.56 693.696 160 544 160c-115.808 0-214.944 68.736-260.672 167.36A142.72 142.72 0 0 0 240.032 320a144.032 144.032 0 0 0-144 144c0 15.808 3.168 30.752 7.872 44.928C42.048 544.992 0.032 611.168 0.032 687.936a208 208 0 0 0 208 208V896H784v-0.064c132.576 0 240-107.424 240-240 0-116.992-83.872-214.176-194.752-235.36zM784 831.936V832H208.032a144.256 144.256 0 0 1-144-144.064c0-51.2 26.976-97.44 72.128-123.744 43.872-25.184 46.88-30.176 28.48-75.424a78.56 78.56 0 0 1-4.608-24.736c0-44.128 35.872-80 80-80 0 0 20.992-1.504 43.296 7.36 36.704 14.624 40.704 0.64 58.048-37.088C378.08 275.168 457.6 224 544 224c115.2 0 210.432 87.136 221.568 202.688 3.936 45.824 3.936 45.824 51.68 56.736A175.872 175.872 0 0 1 960 655.936c0 97.056-78.944 176-176 176z"></path>';
    svgs['onedrive'] = '<path d="M350.868 828.388c-60.274-15.06-93.856-62.97-93.962-134.064-0.032-22.726 1.612-33.62 7.286-48.236 13.908-35.834 50.728-62.872 99.176-72.822 24.11-4.95 31.536-10.266 31.536-22.572 0-3.862 2.872-15.36 6.378-25.552 15.932-46.306 45.43-84.91 76.948-100.702 32.99-16.526 49.642-20.254 89.548-20.04 56.674 0.304 84.952 12.598 124.496 54.128l21.75 22.842 19.484-6.742c94.3-32.636 188.306 22.916 195.888 115.756l2.072 25.398 18.57 6.65c53.032 19.004 77.96 58.904 73.442 117.556-2.958 38.358-20.89 68.98-49.3 84.184l-13.356 7.146-296.822 0.57c-228.094 0.44-300.6-0.368-313.134-3.5zM103.218 785.966c-36.176-9.086-74.506-42.854-92.48-81.47C0.542 682.59 0 679.368 0 640.616c0-36.864 0.87-42.778 8.988-61.08 17.11-38.582 49.894-66.46 91.03-77.408 8.684-2.312 16.842-6 18.128-8.196 1.29-2.198 2.722-14.164 3.182-26.592 2.866-77.196 50.79-145.214 117.708-167.056 36.154-11.8 83.572-12.898 122.896 3.726 12.47 5.274 11.068 6.404 37.438-30.14 15.594-21.612 45.108-44.49 70.9-58.18 27.838-14.776 56.792-21.584 91.412-21.494 96.768 0.252 180.166 64.22 211.004 161.848 9.854 31.192 9.362 39.926-2.26 40.184-5.072 0.112-19.604 3.064-32.292 6.558l-23.072 6.358-21.052-22.25c-59.362-62.734-156.238-76.294-238.592-33.396-32.9 17.138-59.34 41.746-79.31 73.81-14.236 22.858-32.39 65.504-32.39 76.094 0 7.51-5.754 11.264-30.332 19.782-76.094 26.376-120.508 87.282-120.476 165.218 0.01 28.368 6.922 63.074 16.52 82.956 3.618 7.494 5.634 14.622 4.484 15.836-2.946 3.106-97.608 2.06-110.696-1.228z"></path>';
    svgs['tianyi'] = '<path d="M838.4 416c-6.4-70.4-64-115.2-134.4-115.2-19.2 0-38.4 6.4-51.2 6.4-44.8-51.2-115.2-83.2-185.6-83.2-89.6 0-172.8 51.2-211.2 128h-12.8C115.2 352 19.2 448 12.8 576s96 224 224 230.4h294.4c25.6 0 44.8-19.2 44.8-44.8s-19.2-44.8-44.8-44.8H249.6c-70.4 0-134.4-57.6-134.4-128s51.2-128 121.6-134.4c12.8 0 25.6 0 38.4 6.4h6.4l25.6 6.4C320 390.4 390.4 320 473.6 320c57.6 0 108.8 32 140.8 83.2 6.4 6.4 6.4 12.8 6.4 19.2l6.4-6.4c19.2-19.2 51.2-19.2 70.4-19.2 44.8 0 70.4 38.4 70.4 76.8 0 12.8-6.4 25.6-6.4 38.4 12.8 6.4 19.2 19.2 38.4 19.2 6.4-6.4 19.2-12.8 19.2-19.2 64 6.4 115.2 57.6 108.8 128-6.4 57.6-57.6 108.8-121.6 108.8-51.2 0-96-32-115.2-83.2h51.2c6.4 0 12.8-6.4 12.8-12.8s0-6.4-6.4-6.4l-96-128c-6.4-6.4-12.8-12.8-19.2-6.4h-6.4l-96 128c-6.4 6.4-6.4 19.2 6.4 19.2 6.4 0 6.4 6.4 6.4 6.4h57.6c19.2 115.2 128 192 243.2 172.8 115.2-19.2 192-128 172.8-243.2-25.6-96-89.6-160-179.2-179.2z"</path>';
    svgs['ctfile'] = '<path d="M732.719113 649.59415l128.975799 32.518323q-40.546284 158.91298-145.946298 242.363126T458.101875 1007.966394q-157.591923 0-256.305357-64.162716t-150.2753-185.821892Q0 636.281962 0 496.676736q0-152.246724 58.16715-265.634051t165.558912-172.204844Q330.99588 0 460.113947 0q146.332454 0 245.919818 74.46696t138.954859 209.438324l-126.984052 29.916857q-33.819056-106.35524-98.408575-154.909161T457.370213 110.359059q-112.37113 0-187.833963 53.858472t-106.050381 144.625242a581.793447 581.793447 0 0 0-30.587548 187.163273q0 124.362262 36.237607 217.08013t112.696313 138.629676a316.037452 316.037452 0 0 0 165.558912 45.891483q108.367311 0 183.504961-62.496152t101.822999-185.517033zM1194.58092 893.806756l14.023527 85.685781a360.973709 360.973709 0 0 1-73.288171 8.617356q-52.842275 0-81.905526-16.706289t-40.952763-43.92006q-11.869188-27.193448-11.848864-114.505145v-329.24802h-71.133831v-75.44251h71.133831v-141.779888l96.437152-58.187474v199.906391h97.554969v75.442509h-97.554969v334.69484q0 41.481186 5.121636 53.350373a40.42434 40.42434 0 0 0 16.706288 18.860628q11.584653 7.011763 33.148366 7.011763a314.757043 314.757043 0 0 0 42.558355-3.780255z"></path>';
    svgs['qwqw'] = '';
    svgs['qwqw'] = '';
    svgs['qwqw'] = '';
function show_svg(){
    $("[data-svg]").each(function() {
        var viewbox=$(this).attr("data-viewbox"),
        svgclass=$(this).attr("data-class"),
        svgname = $(this).attr("data-svg"),
        svg_html = '<svg class="'+svgclass+'" viewBox="'+viewbox+'">'+svgs[svgname] +'</svg>';
        $(this).html(svg_html);
    })
}