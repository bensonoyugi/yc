import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
	searchParams
}: {
	searchParams: Promise<{ query: string }>;
}) {
	const query = (await searchParams).query;

	const posts = [
		{
			_createdAt: "2024-10-29T22:06:59.385Z",
			author: { _id: 1, name: "Oyugi" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 1,
			category: "Clothing",
			title: "orchid unde Product",
			description:
				"Iusto eos unde ut delectus debitis occaecati accusamus quos modi.",
			_id: "1"
		},
		{
			_createdAt: "2024-10-29T14:20:32.129Z",
			author: { _id: 1, name: "Oyugi" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 37,
			category: "Diesel",
			title: "Borders",
			description: "Dignissimos odio natus ut.",
			_id: "2"
		},
		{
			_createdAt: "2024-10-30T03:16:11.295Z",
			author: { _id: 4, name: "Caroline" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 15,
			category: "mammoth",
			title: "Einsteinium Metal",
			description: "Cumque non itaque sint a nemo ut nulla voluptatibus porro.",
			_id: "3"
		},
		{
			_createdAt: "2024-10-29T22:01:58.933Z",
			author: { _id: 3, name: "Brian E." },
			image: "https://loremflickr.com/640/480/abstract",
			views: 40,
			category: "upwardly",
			title: "communities Indiana Intersex",
			description: "Rerum magnam eaque ipsum corporis similique harum ipsa.",
			_id: "4"
		},
		{
			_createdAt: "2024-10-29T14:17:19.884Z",
			author: { _id: 3, name: "Brian E." },
			image: "https://loremflickr.com/640/480/abstract",
			views: 57,
			category: "becquerel",
			title: "website reinvent Gold",
			description:
				"Aperiam libero nesciunt maiores magni facilis aperiam quibusdam quaerat.",
			_id: "5"
		},
		{
			_createdAt: "2024-10-29T23:03:24.411Z",
			author: { _id: 2, name: "Xerxes" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 8,
			category: "Transexual",
			title: "Jaguar",
			description: "Ut expedita doloribus.",
			_id: "6"
		},
		{
			_createdAt: "2024-10-29T14:06:20.471Z",
			author: { _id: 4, name: "Caroline" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 27,
			category: "West",
			title: "Hybrid pish",
			description: "Eveniet cupiditate non ut cum esse.",
			_id: "7"
		},
		{
			_createdAt: "2024-10-30T01:31:43.338Z",
			author: { _id: 7, name: "Shadcn" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 91,
			category: "before",
			title: "indigo henry",
			description: "Ut veniam eos aliquam quos non.",
			_id: "8"
		},
		{
			_createdAt: "2024-10-30T06:08:11.445Z",
			author: { _id: 1, name: "Oyugi" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 44,
			category: "programming",
			title: "Touring auxiliary",
			description: "Neque corporis voluptatibus explicabo.",
			_id: "9"
		},
		{
			_createdAt: "2024-10-29T19:03:24.365Z",
			author: { _id: 8, name: "Doris" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 23,
			category: "Hatchback",
			title: "Folk",
			description: "Esse minima assumenda accusamus id eum eveniet voluptate.",
			_id: "10"
		},
		{
			_createdAt: "2024-10-30T07:11:00.221Z",
			author: { _id: 11, name: "John" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 96,
			category: "entire",
			title: "Malagasy Triathlon/Time totam",
			description: "Vel quaerat tenetur.",
			_id: "11"
		},
		{
			_createdAt: "2024-10-29T14:59:34.036Z",
			author: { _id: 3, name: "Brian E." },
			image: "https://loremflickr.com/640/480/abstract",
			views: 92,
			category: "Latin",
			title: "Implementation Bicycle Garden",
			description:
				"Sint occaecati dignissimos in itaque rerum ut quae cumque pariatur.",
			_id: "12"
		},
		{
			_createdAt: "2024-10-30T08:30:39.084Z",
			author: { _id: 11, name: "John" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 32,
			category: "hyacinth",
			title: "Chief whose mindshare",
			description:
				"Impedit voluptas assumenda at earum dolore dolore quasi dolores.",
			_id: "13"
		},
		{
			_createdAt: "2024-10-29T09:56:51.021Z",
			author: { _id: 5, name: "Seaun" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 73,
			category: "Analyst",
			title: "Wooden Wyoming enable",
			description:
				"Accusantium vitae exercitationem neque iste earum illo laboriosam provident.",
			_id: "14"
		},
		{
			_createdAt: "2024-10-29T16:43:30.229Z",
			author: { _id: 1, name: "Oyugi" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 37,
			category: "testimonial",
			title: "Borders interface compress",
			description:
				"Incidunt quod culpa minima voluptatum occaecati perferendis ipsa nemo.",
			_id: "15"
		},
		{
			_createdAt: "2024-10-30T01:32:37.308Z",
			author: { _id: 9, name: "Elias" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 18,
			category: "kelvin",
			title: "East tenetur second",
			description:
				"Saepe officiis doloribus voluptates cupiditate modi suscipit in dolorem quos.",
			_id: "16"
		},
		{
			_createdAt: "2024-10-30T04:56:52.140Z",
			author: { _id: 16, name: "Phylis" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 65,
			category: "Southeast",
			title: "Calcium up",
			description: "Nesciunt animi exercitationem debitis.",
			_id: "17"
		},
		{
			_createdAt: "2024-10-29T21:01:36.652Z",
			author: { _id: 22, name: "Byron" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 23,
			category: "Alabama",
			title: "withdrawal",
			description: "Neque officia et.",
			_id: "18"
		},
		{
			_createdAt: "2024-10-30T06:20:43.169Z",
			author: { _id: 8, name: "Doris" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 70,
			category: "Hybrid",
			title: "Gasoline",
			description: "Delectus nisi laborum et ipsum amet numquam.",
			_id: "19"
		},
		{
			_createdAt: "2024-10-29T17:43:15.379Z",
			author: { _id: 8, name: "Doris" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 52,
			category: "male",
			title: "Tuna",
			description: "Dolorem voluptatum quia accusantium.",
			_id: "20"
		},
		{
			_createdAt: "2024-10-29T18:14:49.408Z",
			author: { _id: 10, name: "Kartel" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 20,
			category: "although",
			title: "monitor New brr",
			description:
				"Repellendus repellendus atque error recusandae dolorem necessitatibus ad.",
			_id: "21"
		},
		{
			_createdAt: "2024-10-29T19:41:55.953Z",
			author: { _id: 6, name: "Carrey" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 43,
			category: "Neon",
			title: "Falls Rustic leverage",
			description: "Facilis aliquam minus atque id unde.",
			_id: "22"
		},
		{
			_createdAt: "2024-10-29T22:25:33.917Z",
			author: { _id: 7, name: "Shadcn" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 15,
			category: "quiet",
			title: "Senior",
			description: "Occaecati deleniti magnam id est provident harum.",
			_id: "23"
		},
		{
			_createdAt: "2024-10-30T04:53:53.058Z",
			author: { _id: 12, name: "Morris" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 91,
			category: "South",
			title: "South",
			description:
				"Quos adipisci omnis tenetur laborum corrupti consequatur necessitatibus adipisci rerum.",
			_id: "24"
		},
		{
			_createdAt: "2024-10-30T02:44:49.649Z",
			author: { _id: 5, name: "Seaun" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 83,
			category: "gray",
			title: "Modern",
			description:
				"Neque doloremque quibusdam repellat distinctio atque exercitationem laboriosam autem.",
			_id: "25"
		},
		{
			_createdAt: "2024-10-29T19:22:16.184Z",
			author: { _id: 8, name: "Doris" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 5,
			category: "reboot",
			title: "connecting Shirt Hip",
			description: "Ullam in blanditiis tempora ratione.",
			_id: "26"
		},
		{
			_createdAt: "2024-10-30T04:38:07.130Z",
			author: { _id: 21, name: "Slevin" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 84,
			category: "infomediaries",
			title: "male across",
			description: "Quos animi veniam magnam sed optio.",
			_id: "27"
		},
		{
			_createdAt: "2024-10-30T06:32:37.369Z",
			author: { _id: 4, name: "Caroline" },
			image: "https://loremflickr.com/640/480/abstract",
			views: 95,
			category: "Iraq",
			title: "bypass Mali",
			description:
				"Explicabo sequi ratione ipsum aspernatur ipsum autem hic atque nisi.",
			_id: "28"
		}
	];

	return (
		<>
			<section className="w-full bg-primary min-h-[530px] flex justify-center items-center flex-col py-10 px-6 pattern">
				<h1 className="heading">
					Pitch Your Startup, <br /> Connect With Entrepreneurs
				</h1>

				<p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !max-w-3xl">
					Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
				</p>

				<SearchForm query={query} />
			</section>

			<section className="px-6 py-10 m-w-7xl mx-auto">
				<p className="text-30 text-semibold">
					{query ? `Search results for "${query}"` : "All Startups"}
				</p>

				<ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartupCard key={post._id} post={post} />
						))
					) : (
						<p className="text-black-100 text-sm font-normal">
							No Startups Found
						</p>
					)}
				</ul>
			</section>
		</>
	);
}
